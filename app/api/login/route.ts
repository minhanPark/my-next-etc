import { NextRequest, NextResponse } from "next/server";
import { ValidationError } from "joi";

import LoginSchema from "@/libs/validations/LoginSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await LoginSchema.validateAsync(body);
    return NextResponse.json({ message: "ok", ...body });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ ok: "false", message: e.message });
    }
    return NextResponse.json({ ok: "false" });
  }
}
