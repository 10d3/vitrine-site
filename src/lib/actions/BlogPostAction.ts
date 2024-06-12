'use server'
import { prisma } from "../db/prisma";

export const createBlogPost = async ({blogPost}:any) => {
    try {
        const newBlogPost = await prisma.blogPost.create({
            data:{
                title: blogPost.title,
                content: blogPost.sanitizedContent,
                image: blogPost.image,
                slug: blogPost.slug,
                author: 'admin'
            }
        })
        console.log(newBlogPost)
        return newBlogPost
    } catch (error) {
        console.log(error)
    }
};
