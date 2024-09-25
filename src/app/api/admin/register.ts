import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// Mock database for admins
let admins = [
  { username: 'superadmin', password: bcrypt.hashSync('supersecret', 10), role: 'SUPER_ADMIN' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password, role } = req.body;

    if (role === 'SUPER_ADMIN' && admins.some((admin) => admin.role === 'SUPER_ADMIN')) {
      return res.status(403).json({ message: 'Only one super admin allowed.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newAdmin = { username, password: hashedPassword, role };
    admins.push(newAdmin);

    res.status(201).json({ message: 'Admin registered successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
