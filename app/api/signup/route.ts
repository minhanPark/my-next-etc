import { NextResponse } from "next/server";
import { ValidationError } from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import SignupSchema from "@/libs/validations/SignupSchema";
import prisma from "@/libs/prisma";

interface Body {
  email: string;
  password: string;
  passwordCheck: string;
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    await SignupSchema.validateAsync(body);

    const { email, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json({
        ok: false,
        message: "이미 존재하는 이메일입니다.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

    const response = NextResponse.json(
      {
        ok: true,
        message: "회원가입이 완료되었습니다.",
      },
      {
        headers: {
          "Set-Cookie": `x-token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${
            60 * 60 * 24 * 7
          };`,
        },
      }
    );
    return response;
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({ ok: false, message: e.message });
    }
    return NextResponse.json({ ok: false });
  }
}
