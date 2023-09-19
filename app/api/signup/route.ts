import { NextResponse } from "next/server";
import { ValidationError } from "joi";
import bcrypt from "bcrypt";

import SignupSchema from "@/libs/validations/SignupSchema";
import prisma from "@/libs/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await SignupSchema.validateAsync(body);
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (existingUser) {
      return NextResponse.json({
        ok: false,
        message: "이미 존재하는 이메일입니다.",
      });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);

    await prisma.user.create({
      data: {
        email: body.email,
        hashedPassword,
      },
    });
    return NextResponse.json({
      ok: true,
      message: "회원가입이 완료되었습니다.",
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ ok: false, message: e.message });
    }
    return NextResponse.json({ ok: false });
  }
}
