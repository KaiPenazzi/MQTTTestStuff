import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()

    const res = await prisma.data.findMany()

    return res
})