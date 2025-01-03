import { NextResponse } from 'next/server';
import User from '@/lib/userModel';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      user_name: name, // Use database column name
      email: email,    // Use database column name
      user_password: hashedPassword, // Use database column name
    });

    return NextResponse.json({ message: 'User created successfully', newUser }, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
