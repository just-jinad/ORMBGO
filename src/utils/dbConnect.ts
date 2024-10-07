import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string || 'mongodb://localhost:27017/ormbgo';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = (global as any).mongoose;
// let cached = global.mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log("mongoose connected successfully");
        
      return mongoose;
    }).catch((error) => {
        console.error('MongoDB connection error:', error);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;
