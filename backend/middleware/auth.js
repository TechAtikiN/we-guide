import jwt from 'jsonwebtoken';
import errorResponse from '../utils/errorResponse.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
//if no token found throw error
  if (!token) {
    return next(new errorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new errorResponse("No user found with this id", 404));
    }

    req.user = user;

    next();
  } catch (err) {
    return next(new errorResponse("Not authorized to access this router", 401));
  }
};

// export const protect = async(req, res, next) => {
//   let token

//   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       try {
//           //Get token from header
//           token = req.headers.authorization.split(' ')[1]

//           //verify token
//           const decoded = jwt.verify(token, process.env.JWT_SECRET)

//           //Get user from the token
//           req.user = await User.findById(decoded.id).select('-password')

//           next()
//       } catch (error) {
//           console.log(error)
//           res.status(401)
//           throw new errorResponse('Not Authorized')
//       }
//   }

//   if(!token) {
//       res.status(401) 
//       throw new errorResponse('Not Authorized, no token')
//   }
// }


