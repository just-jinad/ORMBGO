import { NextApiRequest, NextApiResponse } from 'next';

interface Image {
  id: string;
  title: string;
  description: string;
  url: string;
}

const images: Image[] = [
  { id: '1', title: 'Image 1', description: 'Description 1', url: '/path/to/image1.jpg' },
  { id: '2', title: 'Image 2', description: 'Description 2', url: '/path/to/image2.jpg' },
  // Add more images as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(images);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
