import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import mongoose from 'mongoose';
import Image from '../models/Image';

// Configure multer for file handling
const upload = multer({ storage: multer.memoryStorage() });

// Middleware for handling file uploads
const apiRoute = nextConnect({
  onError(error:any, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req: any, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Save image metadata to MongoDB
    const newImage = new Image({
      src: req.file.buffer, // Use buffer for in-memory storage (or upload to a service like Cloudinary)
      title: req.body.title,
      description: req.body.description,
    });

    await newImage.save();
    res.status(200).json({ message: 'Image uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser for file uploads
  },
};
