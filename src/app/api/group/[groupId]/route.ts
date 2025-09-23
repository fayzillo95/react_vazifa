
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

function getLessonDays(startDate: Date, monthDuration: number, daysOffWeek: number) {

    const target = new Date(startDate.toISOString())
    const end = new Date(startDate.toISOString())
    end.setMonth(startDate.getMonth() + monthDuration)
    const weeks = daysOffWeek % 2 ? [1, 2, 3] : [2, 4, 6]

    let days = []
    let daysInMonth: Record<string, {
        date: string,
        weekday: {
            inDigit: number,
            inString: string
        },
        year: number,
        month: {
            inDigit: number,
            inString: string
        },
    }[]> = {}

    while (target < end) {
        if (weeks.includes(target.getDay())) {

            const inStringMonth = target.toLocaleString("en-US", { month: "long" })
            const obj = {
                date: target.toISOString().split("T")[0],
                weekday: {
                    inDigit: target.getDay(),
                    inString: target.toLocaleString("en-US", { weekday: "long" })
                },
                year: target.getFullYear(),
                month: {
                    inDigit: target.getMonth(),
                    inString: inStringMonth
                }
            }

            days.push(obj)

            if (!daysInMonth[inStringMonth]) {
                daysInMonth[inStringMonth] = []
            }
            daysInMonth[inStringMonth].push(obj)
        }
        target.setDate(target.getDate() + 1)
    }

    console.log(target.getDay())
    return { days, daysInMonth }
}

export async function GET(req: Request, context: { params: Promise<{ groupId: string }> }) {
    const { groupId } = await context.params
    const group = await prisma.group.findUnique({
        where: {
            id: parseInt(groupId)
        }
    })
    if (!group) {
        return NextResponse.json({
            message: "Group not found !"
        })
    } else {
        const days = getLessonDays(group.startDate, group.monthDuration, group.daysOfWeek)
        return NextResponse.json({
            group: group,
            shedules: days
        })
    }
}