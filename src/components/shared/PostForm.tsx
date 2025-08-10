'use client'
import { PostValues } from '@/lib'
import { PostSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FileUploader } from './FileUpload'
// import Tiptap from './FieldQuill'
import { Card } from '../ui/card'
// import DatePicker from "react-datepicker";
import { Loader } from './loader'
import { useUploadThing } from "@/lib/uploadthings/uploadthing"
import { createBlogPost } from '@/lib/actions/BlogPostAction'
import DOMPurify from 'dompurify';


export default function PostForm() {

    const [files, setFiles] = useState<File[]>([]);
    const [content, setContent] = useState('');

    const handleContentChange = (reason: any) => {
        setContent(reason)
    }

    const { startUpload } = useUploadThing('imageUploader')
    const initiaValues = PostValues
    const form = useForm<z.infer<typeof PostSchema>>({
        resolver: zodResolver(PostSchema),
        defaultValues: initiaValues
    })

    async function onSubmit(values: z.infer<typeof PostSchema>) {

        let uploadedImageUrl = values.image;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files)

            if (!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }
        const sanitizedContent = DOMPurify.sanitize(content);
        try {
            const newEvent = await createBlogPost({
                blogPost: { ...values, image: uploadedImageUrl, sanitizedContent },
            })

            if (newEvent) {
                form.reset();
                //   router.push('/successfully')
                // router.push("/event")
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className='flex flex-row w-full gap-4'>
                    <Card className='flex flex-col flex-1 p-4 w-1/4 h-auto gap-4'>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder='Title' {...field} className=' input-field' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder='Slug' {...field} className=' input-field' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    {/* <FormLabel>Event Description</FormLabel> */}
                                    <FormControl className=" h-72">
                                        <FileUploader onFieldChange={field.onChange} image={field.value} setFiles={setFiles} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </Card>
                    <div className='w-3/4 h-auto'>
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    {/* <FormLabel>Event Description</FormLabel> */}
                                    <FormControl className=" h-72">
                                        {/* <Tiptap content={field.value} onFieldChange={field.onChange} setContent={setContent} /> */}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button disabled={form.formState.isSubmitting} type="submit" className="w-full">
                    {form.formState.isSubmitting ? <Loader /> : "Submit"}
                </Button>
            </form>
        </Form>
    )
}
