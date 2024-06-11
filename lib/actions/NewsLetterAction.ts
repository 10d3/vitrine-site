'use server'
import { z } from "zod"
import { prisma } from "../db/prisma"
import { NewsletterSchema } from "../validation"

export const NewsLetterAction = async (values: z.infer<typeof NewsletterSchema>) =>{

    try {
        const Subcription = await prisma.newsletter.create({
            data: {
                email: values.email,
            }
        })
        console.log('Subcription')
        return Subcription
    } catch (error) {
        return error
    }
}