// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const MONGODB_URI = 'mongodb+srv://jinadtope66:Aderinto2@cluster0.jph7qff.mongodb.net/ormbgo?retryWrites=true&w=majority';

async function seedAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        
        const adminSchema = new mongoose.Schema({
            username: { type: String, required: true },
            password: { type: String, required: true },
        });

        const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

        const hashedPassword = await bcrypt.hash('your_admin_password', 10); // Hash the password

        const adminUser = new Admin({
            username: 'admin2',
            password: hashedPassword,
        });

        await adminUser.save();
        console.log('Admin seeded');
    } catch (err) {
        console.error('Error seeding admin:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedAdmin();
