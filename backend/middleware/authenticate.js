import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import errorResponse from '../utils/errorResponse.js';

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token})

        if(!rootUser) {
            throw new errorResponse('User not found')
        }

        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id

        next();

    } catch (err) {
        res.status(401).send('Unauthorized')
        console.log(err)
    }
}

export default authenticate