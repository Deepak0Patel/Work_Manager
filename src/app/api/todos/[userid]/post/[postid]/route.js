import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userid, postid } = params;
  console.log("userid is ", userid, "postid is ", postid);
  return NextResponse.json(params);
}
