import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return NextResponse.json(
    { ok: false, message: `${id} is not found` },
    { status: 404 }
  );
}
