import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Prisma singleton
let prisma= new PrismaClient();

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Email mavjudligini tekshirish
        const exists = await prisma.user.findFirst({
            where: { email: data.email }
        });

        if (exists) {
            // Redirect qilamiz
            console.log(exists)
            return NextResponse.json(exists);
        }

        // Agar user mavjud bo‘lmasa, yaratish
        const newUser = await prisma.user.create({
            data
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
