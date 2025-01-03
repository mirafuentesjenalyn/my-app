import { NextResponse } from 'next/server';
import User from '@/lib/userModel';
import bcrypt from 'bcrypt';

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);


export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Fetch user from the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.user_password); // FIXED
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
