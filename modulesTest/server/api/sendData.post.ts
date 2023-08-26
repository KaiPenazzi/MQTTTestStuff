import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()
    
    const stuff = await readBody(event)

    await prisma.data.create({
        data: {
            input: stuff.data + ""
        }
    })

    prisma.$disconnect();
})