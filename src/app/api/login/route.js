import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();
  // 1.  while register we get email and when some one login and enter email we checked that is this email is present in database if have gave me that user
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      throw new Error("user not found");
    }

    // 2. after getting the user we compare login password to the password register  password if that match so user is login
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("incorrect password  !!");
    }

    // 3. generate token for the user who passed our previous 2 steps
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // 4.  send token by cookies with next response
    const response = NextResponse.json({
      message: "Login success",
      success: true,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
