import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Successfully connected to database: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Database connection error:", error);
        process.exit(1);
    }
}

export default connectDB