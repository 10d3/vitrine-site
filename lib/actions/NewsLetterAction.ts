'use server'
import { z } from "zod"
import { NewsletterSchema } from "../validation"
import { prisma } from "../prisma"

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