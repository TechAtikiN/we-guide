import User from "../models/User.js";
import errorResponse from "../utils/errorResponse.js";
import authenticate from "../middleware/authenticate.js";

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;

    // if(!username || !email || !password) {
    //     return next(new errorResponse("Please fill all the details!", 400))
    // }

    User.findOne({ email : email })
    .then((userExists) => {
        if(userExists) {
            return next(new errorResponse("Email already exists", 400))
        }
    })

    try{
        const user = await User.create({
            username, email, password
     });

        sendToken(user, 201, res);

    } catch (error) {
        next(error)
    }

}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new errorResponse("Please provide an email and password", 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user){
            return next(new errorResponse("Invalid Credentials", 401))
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return next(new errorResponse("Invalid Credentials", 401))
        } 
        sendToken(user, 200, res);      
  
    } catch (error) {
        next(error)
    }
}

export const user = (req, res, next) => {
    res.send(req.rootUser)
}

export const forgotPassword = (req, res, next) => {
    res.send("Forgot Password")
}
export const resetPassword = (req, res, next) => {
    res.send("Reset Password")
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken() 
    res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
    })

    res.status(statusCode).json({ user, success: true, token })
    return token

}