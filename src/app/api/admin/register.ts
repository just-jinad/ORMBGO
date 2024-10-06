import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../../models/Admin'; // Mongoose admin model
import dbConnect from '../../../utils/dbConnect'; // MongoDB connection

dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  console.log(req.body);
  

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const newAdmin = new Admin({
      username,
      password: hashedPassword,
      role: 'subAdmin', // or 'superAdmin' depending on your logic
    });

    await newAdmin.save();

    // Create JWT token
    const token = jwt.sign(
      { id: newAdmin._id, role: newAdmin.role },
      process.env.JWT_SECRET || 'fallbackSecretKey', // Fallback in case JWT_SECRET is undefined
      { expiresIn: '1h' }
    );

    res.status(201).json({
      admin: {
        id: newAdmin._id,
        username: newAdmin.username,
        role: newAdmin.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
