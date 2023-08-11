import { getresponsemessage } from "@/helper/getresponsemessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get a task by id
export async function GET(request, { params }) {
  const { taskid } = params;
  try {
    const task = await Task.findById(taskid);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getresponsemessage("failed to get user..", 500, false);
  }
}

//delete task by id
export async function DELETE(request, { params }) {
  const { taskid } = params;
  try {
    await Task.deleteOne({
      _id: taskid,
    });
    return NextResponse.json({
      massage: "task deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return getresponsemessage("failed to delete task", 404, false);
  }
}

// update task by id
export async function PUT(request, { params }) {
  const { title, content, status } = await request.json();
  const { taskid } = params;
  try {
    const task = await Task.findById(taskid);
    task.title = title;
    task.content = content;
    task.status = status;
    const updatetask = await task.save();
    return NextResponse.json({ updatetask });
  } catch (error) {
    console.log(error);
    return getresponsemessage("failed to update a task", 404, false);
  }
}
