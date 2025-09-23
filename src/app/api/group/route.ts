import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    const newGroup = await prisma.group.create({
        data : {
            name : body.name,
            startDate : new Date(body.startDate),
            monthDuration : body.monthDuration,
            daysOfWeek : body.daysOfWeek
        }
    })
    console.log(newGroup)
    return NextResponse.json(body)
}


export async function GET(req :Request) {
    const groupes = await prisma.group.findMany()
    return NextResponse.json(groupes)
}
