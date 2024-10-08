import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://jinadtope66:Aderinto2@cluster0.jph7qff.mongodb.net/ormbgo?retryWrites=true&w=majority';

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Connect to MongoDB
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URI,);
        }
        const { username, password } = req.body;

        try {
            // Find the admin user
            const adminUser = await Admin.findOne({ username });
            if (!adminUser) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Compare password
            const matchedPassword = await bcrypt.compare(password, adminUser.password);
            if (!matchedPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            return res.status(500).json({ message: 'Server error' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
