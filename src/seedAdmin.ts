// seedAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = 'mongodb+srv://jinadtope66:Aderinto2@cluster0.jph7qff.mongodb.net/ormbgo?retryWrites=true&w=majority'; // Replace with your connection string

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);

async function seedAdmin() {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
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
  await mongoose.connection.close();
}

seedAdmin().catch(err => console.error(err));
