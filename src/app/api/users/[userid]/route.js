import { User } from "@/models/user";
import { NextResponse } from "next/server";

//Get user by id
export async function GET(request, { params }) {
  const { userid } = params;

  const user = await User.findById({ _id: userid }).select("-password");

  return NextResponse.json(user);
}

//Delete user by id
export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await User.deleteOne({
      _id: userid,
    });

    return NextResponse.json({ massage: "user deleted", success: true });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      massage: "failed to delete user",
      success: false,
    });
  }
}

// Update user by id

export async function PUT(request, { params }) {
  const { userid } = params;

  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(userid);

    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;

    const updateuser = await user.save();

    return NextResponse.json({ updateuser });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      massage: "failed to update",
      success: false,
    });
  }
}
