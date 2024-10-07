
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Admin = require('./app/models/Admin.ts')
const dbConnect = require('./utils/dbConnect')
async function seedAdmin(){

  await  dbConnect()

    const username = 'admin'
    const password = 'adminPassword'

    const adminCheck = await Admin.findOne({username})
    if(adminCheck){
        console.log("Admin already exist");
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newAdmin = new Admin({username, password:hashedPassword})
    await newAdmin.save()

    console.log('Admin created successfully');
    mongoose.connection.close()
}

seedAdmin()