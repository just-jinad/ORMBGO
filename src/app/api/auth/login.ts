import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import mongooose from 'mongoose'

const MONGODB_URI = 'mongodb+srv://jinadtope66:Aderinto2@cluster0.jph7qff.mongodb.net/ormbgo?retryWrites=true&w=majority'

const adminSchema = new mongooose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})


const Admin = mongooose.models.Admin || mongoose.model('Admin', adminSchema)

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if (req.method === 'POST') {
        // Connect to MongoDB
        if (mongoose.connection.readyState === 0) {
          await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        }
    }
}