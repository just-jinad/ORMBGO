import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://jinadtope66:Aderinto2@cluster0.jph7qff.mongodb.net/ormbgo?retryWrites=true&w=majority';

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export async function POST(req: NextRequest) {
    // Connect to MongoDB
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGODB_URI);
    }

    const { username, password } = await req.json();  // Use req.json() to parse the request body

    try {
        // Find the admin user
        const adminUser = await Admin.findOne({ username });
        if (!adminUser) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }

        // Compare password
        const matchedPassword = await bcrypt.compare(password, adminUser.password);
        if (!matchedPassword) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }

        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
