import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const {data} = await req.json()
    console.log(data)
    const result = await prisma.user.create({data : {
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        password : data.password
    }})
    console.log( "user/post -> ",result)
    return NextResponse.json(result)
}

export async function GET(req: Request) {
    const prisma = new PrismaClient()

    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}