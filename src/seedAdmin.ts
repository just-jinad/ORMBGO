import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Admin from './app/models/Admin';
import dbConnect from './utils/dbConnect';

async function seedAdmin() {
  await dbConnect();

  const username = 'admin';
  const password = 'adminPassword';

  const adminCheck = await Admin.findOne({ username });
  if (adminCheck) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new Admin({ username, password: hashedPassword });
  await newAdmin.save();

  console.log('Admin created successfully');
  mongoose.connection.close();
}

seedAdmin();
