import Works from "@/models/work";
import { NextResponse } from "next/server";

// Get user by id
export async function GET(request, { params }) {
  const { workid } = params;

  const work = await Works.findById({ _id: workid });

  return NextResponse.json(work);
}

/// delete user by id

export async function DELETE(request, { params }) {
  const { workid } = params;

  try {
    await Works.deleteOne({
      _id: workid,
    });
    return NextResponse.json({ massage: "work deleted", success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      massage: "failed to delete user",
      success: false,
    });
  }
}

// update work

export async function PUT(request, { params }) {
  const { workid } = params;

  const { work_name, worker_name } = await request.json();

  try {
    const work = await Works.findById(workid);

    work.work_name = work_name;
    work.worker_name = worker_name;

    const updatework = await work.save();

    return NextResponse.json({ updatework });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      massage: "failed to update",
      success: false,
    });
  }
}
