import { getresponsemessage } from "@/helper/getresponsemessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

/// to get all tasks
export async function GET(request) {
  let task = [];
  try {
    task = await Task.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({ massage: "failed to get task", success: true });
  }
  return NextResponse.json(task);
}

// to post tasks

export async function POST(request) {
  const { title, content, userId } = await request.json();

  try {
    const task = await Task({
      title,
      content,
      userId,
    });

    const response = await task.save();
    return NextResponse.json(
      response,
      { status: 201 },
      { massage: "created", success: true }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      massage: "failed to create a task",
      success: true,
    });
  }
}
