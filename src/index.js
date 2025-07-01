import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// import express from "express"; // Remove this line
import connectDB from "../src/db/index.js";
import { app } from "./app.js"; // Add this line
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