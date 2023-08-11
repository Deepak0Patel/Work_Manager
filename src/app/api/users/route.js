import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const connect = async () => {
  await connectDB();
};
connect();
// To get all users
export async function GET(request) {
  let users = [];

  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      massage: "failed to get user",
      success: false,
    });
  }
  return NextResponse.json(users);
}
//to delete user
// export function DELETE(request) {
//   return NextResponse.json(
//     { massage: "deleted", success: true },
//     { status: 201 }
//   );
// }
// to add user
export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  try {
    //save  object to database
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BECRYPT_SALT)
    );
    const createdUser = await user.save();
    const response = NextResponse.json(user, { status: 201 });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        massage: "failed to create user",
        success: false,
      },
      { status: 500 }
    );
  }
}
