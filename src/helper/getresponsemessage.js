import { NextResponse } from "next/server";

export const getresponsemessage = (messageText, statuscode, successStatus) => {
  return NextResponse.json(
    {
      message: messageText,
      success: successStatus,
    },
    {
      status: statuscode,
    }
  );
};
