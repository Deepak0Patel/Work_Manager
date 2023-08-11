import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";

import Works from "@/models/work";
// const Works = require("@/models/work");
//To crete   work

connectDB();
export async function POST(request) {
  const { work_name, worker_name } = await request.json();

  const work = new Works({
    work_name,
    worker_name,
  });

  try {
    const creatework = await work.save();

    return NextResponse.json(work, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      massage: "failed to create a work",
      success: false,
    });
  }
}
/// get a work

export async function GET(request) {
  let work = [];
  try {
    work = await Works.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      massage: "failed to get a user",
      success: false,
    });
  }
  return NextResponse.json(work);
}
