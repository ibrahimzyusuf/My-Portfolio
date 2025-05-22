import mongoose from "mongoose";

const connectToBD=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB successfully ^_^')
    } catch (error) {
        console.log('Connection failed',error)
    }
}

export default connectToBD