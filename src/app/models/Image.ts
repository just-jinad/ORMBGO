import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Image document
interface IImage extends Document {
  src: string;
  title: string;
  description?: string;
}

// Create the schema for Image
const ImageSchema: Schema = new Schema({
  src: { type: String, required: true }, // URL or file path
  title: { type: String, required: true },
  description: { type: String, default: '' },
});

export default mongoose.models.Image || mongoose.model<IImage>('Image', ImageSchema);
