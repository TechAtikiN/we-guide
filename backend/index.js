// const blogRoutes = require('./routes/blogs')
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roadmapsRoute from "./routes/roadmaps.js";
import cookieParser from "cookie-parser";


//middleware
// app.use(express.json());
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// })

//routes
// app.get('/', (req, res) => {
//     res.json({ mssg: 'welcome to the app' })
// })
// app.use('/blogs', blogRoutes)

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         //listen on port 4000
//         app.listen(process.env.PORT, () => {
//             console.log('connected to db and listening on port 4000')
//         })
//     }).catch((error) => {
//         console.log(error)
//     })

const app = express();
dotenv.config();
    
    const connect = async () => {
        try {
            await mongoose.connect(process.env.MONGO);
            console.log("Connected to MongodDB");
        } catch (error) {
            throw error 
        }
    };
    
    // app.get("/", (req, res) => {
    //     res.send("Hello First request")
    // })
    
app.use(express.json())
app.use(cookieParser())

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/roadmaps", roadmapsRoute);

    
app.use((err, req, res, next) => {
        const errorStatus = err.status || 500
        const errorMessage = err.message || "something went wrong!"
        return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack
        })
    })
    
    app.listen(8800, () => {
        connect();
        console.log("Server running on Port 8800!");
    })