import { PrismaClient } from '@prisma/client'

// Erstelle eine PrismaClient-Instanz außerhalb des Event Handlers
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const res = await prisma.data.findMany()
        return res
    } catch (error) {
        console.error('Error retrieving data:', error)
        throw error
    }
})
