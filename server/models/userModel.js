const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,  'Please enter your name'],
        trim: true,
        maxLength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type:String,
        required: [true, 'Please enter your email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type:String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    role: {
        type:String,
        enum: ['user','admin'],
        default:'user'
    },
    addresses: [
        {
          name: String,
          street: String,
          city: String,
          state: String,
          country: String,
          zipCode: String,
          phone: String,
          isDefault: Boolean
        }
    ],
    wishlist: [
        {
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
            addedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    orders: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Order'
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Encrypt password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.getSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Generate JWT token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: precess.env.JWT_EXPIRE
    })
}

// Compare user password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User',userSchema)