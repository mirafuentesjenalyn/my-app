import { NextResponse } from 'next/server';
import User from '@/lib/userModel';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.user_password); // Use user_password
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
