import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(MONGODB_URI as any);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
}

export default dbConnect;
