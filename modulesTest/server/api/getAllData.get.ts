import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient()

    try {
        const res = await prisma.data.findMany()
        return res
    } catch (error) {
        console.error('Error retrieving data:', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
})
