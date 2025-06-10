import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Abhiiii:23032005@cluster0.qrwo7hu.mongodb.net/?retryWrites=true').then(()=>console.log("Database connected"))
}