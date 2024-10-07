import mongoose, { Document, Model } from 'mongoose';

export interface IAdmin extends Document {
  username: string;
  password: string;
}

const AdminSchema = new mongoose.Schema<IAdmin>({
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

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;
