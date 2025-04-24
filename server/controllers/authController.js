const User = require('../models/userModel')
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Creating a new User => /api/v1/signup
const signup = async (req, res, next) => {
    try{
        const {name, email, passwors, phone } = req.body;
        const user = await User.create({
            name, email, password, phone
        })

        sendTokenResponse(user, 200, res);
    }catch(err){
        next(err)
    }
}

// Logging to existed User => /api/v1/login
const login = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        
        // Validate email & password
        if (!email || !password) {
            return next(new ErrorResponse('Please provide an email and password', 400));
        }

        // Check user is already existed or not
        const user = await User.findOne({email}).select('+password');
        if(!user) return next(new ErrorResponse('Invalid credentials', 401))
        
        // Check for Password Match
        const isMatch = await User.comparePassword(password);
        if(!isMatch) return next(new ErrorResponse('Invalid credentials', 401))

        sendResponseToken(user, 200, res)
    } catch(err){
        next(err)
    }
}

// Logging Out => /api/v1/logout
const logout = async (req, res, next) => {
    res.cookie('token','none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly:true
    })
    res.status(200).json({success:true,date:{}})
}

// Get current logged in user profile   => /api/v1/me
const getUserProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({success:true, data:user})
}

// Update user profile   => /api/v1/me/update
const updateProfile = async (req, res, next) => {
    const fieldToUpdate = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    const user = await User.findByIdAndUpdate(req.user.id, fieldToUpdate, {
        new: true,
        runValidators:true
    })
    res.status(200).json({success:true, data:user})
}

// Forgot password   => /api/v1/password/forgot
const forgetPassword = async (req, res, next) => { 
    const user = await User.findOne({ email: req.body.email });
    if(!user) return next(new ErrorResponse('There is no user with that email', 404));

    // Get reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Create reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try{
        await sendEmail({
            email:user.email,
            subject:'Password Reset Token',
            message
        })
        res.status(200).json({success: true, data: 'Email send'})
    } catch(err){
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ValidateBeforeSave: false})

        return next(new ErrorResponse('Email could not Send', 500))
    }
}

// Reset password   => /api/v1/password/reset/:token
const resetPassword = async (req, res, next) => {
    // Get Hashed Password
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now()}
    })
    if(!user) return next(new ErrorResponse('Invalid token', 400));
    
    // Setting new Password for user
    user.passwword = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save()
    sendTokenResponse(user, 200, res)
}

// Update password   => /api/v1/password/update
const updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    if (!(await user.comparePassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
}

// Get token from model, create cookie and send response
const sendTokenResponse = async (user, statusCode, res) => {
    // Creating Token
    const token = user.getJwtToken();
    const option = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    if(process.env.NODE_ENV === 'production'){
        options.secure=true
    }
    res.status(statusCode)
        .cookie('token',token, options)
        .json({success:true, token})
}

module.exports = {
    signup,
    login,
    logout,
    getUserProfile,
    updateProfile,
    forgetPassword,
    resetPassword,
    updatePassword
}