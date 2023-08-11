import { getresponsemessage } from "@/helper/getresponsemessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userid } = params;

  //   const user = await User.findById({ _id: userid });

  try {
    const tasks = await Task.find({
      userId: userid,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getresponsemessage("failed to users tasks", 404, false);
  }
}
