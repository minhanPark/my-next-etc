import { NextResponse } from "next/server";
import { ValidationError } from "joi";

import SignupSchema from "@/libs/validations/SignupSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await SignupSchema.validateAsync(body);
    return NextResponse.json({ message: "ok", ...body });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ ok: "false", message: e.message });
    }
    return NextResponse.json({ ok: "false" });
  }
}
