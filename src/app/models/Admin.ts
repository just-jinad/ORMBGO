// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// export default Admin;

module.exports = Admin;