const createErrorResponse = (message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode;
  
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, createErrorResponse);
    }
  
    return error;
  };
  
module.exports = createErrorResponse;