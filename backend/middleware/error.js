import errorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message

    if(err.code === 1100) {
        const message = `Duplicate field value Enter`;
        error = new errorResponse(message, 400);
    }

    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new errorResponse(message, 400)

    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server error"
    })
}

export default errorHandler