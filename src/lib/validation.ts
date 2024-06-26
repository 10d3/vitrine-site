import { z } from "zod";

export const ContactFormSchema = z.object({
    email: z.string().email().min(2),
    name: z.string().min(5),
    number: z.string().min(6),
    codePostal: z.string(),
    consent: z.literal(true),
})

export type ContactFormSchemaProps = z.infer<typeof ContactFormSchema>

export const NewsletterSchema = z.object({
    email: z.string().email().min(5),
})

export type NewsletterSchemaProps = z.infer<typeof NewsletterSchema>

export const PostSchema = z.object({
    title: z.string(),
    content: z.any(),
    slug: z.string(),
    image: z.string(),
})

export type PostSchemaProps = z.infer<typeof PostSchema>
