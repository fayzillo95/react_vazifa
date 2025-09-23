import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function PUT(req: Request) {
    return {}
}

const prisma = new PrismaClient()
export async function DELETE(req: Request,context : {params : Promise<{ userId: string }>}) {
    const {userId} = await  context.params
    const result = await prisma.user.delete({
        where : {id : parseInt(userId)}
    })
    return NextResponse.json(result)
}

export async function GET(req: Request) {
    return []
}