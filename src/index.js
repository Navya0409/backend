import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "../src/db/index.js";
const app = express();
dotenv.config({
    path: './.env'
});
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`process is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed" , error);
})












// const app = express();

// (async () => {
//     try {
//         await connectDB();
//         app.on("error", (error) => {
//             console.log("Server error:", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log("Error:", error);
//         throw error;
//     }
// })();