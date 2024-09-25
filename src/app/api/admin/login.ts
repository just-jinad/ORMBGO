import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

// Mock admin data for illustration
const admins = [
  { username: 'superadmin', password: bcrypt.hashSync('supersecret', 10), role: 'SUPER_ADMIN' },
  { username: 'subadmin', password: bcrypt.hashSync('subsecret', 10), role: 'SUB_ADMIN' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const admin = admins.find((admin) => admin.username === username);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = bcrypt.compareSync(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: admin.username, role: admin.role }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    res.status(200).json({ token, admin: { username: admin.username, role: admin.role } });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
