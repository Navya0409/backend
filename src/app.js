import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors ({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "32kb"})) //limit on the amount of data coming up
app.use(express.urlencoded({extended:true , limit :"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users" , userRouter)

export {app};