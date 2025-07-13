
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import DB from '../../../lib/dbconnect'; 
import Admin from '@/moduls/admin';
DB();
export async function POST(request:Request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const admin = await Admin.findOne({ email });
    console.log(email, password);
    if (!admin) {
      return NextResponse.json({ error: "User not resister" }, { status: 404 });
    }

    const isPasswordValid = await  admin.password;
    if (!isPasswordValid) {
      return NextResponse.json({ error: "password is wrong" }, { status: 401 });
    }

    const tokenData = { id: admin._id, email: admin.email };
    const token = jwt.sign(tokenData, process.env.TOKEN || "ancdefghi", { expiresIn: '10d' });

    admin.accessToken = token;
    await admin.save(); 

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: {
        email,
        password,
        accessToken: token, 
      },
    });


    return response;
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
