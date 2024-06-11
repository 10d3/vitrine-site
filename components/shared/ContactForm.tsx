'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/validation'
import { ContactValues } from '@/lib'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

export default function ContactForm() {
    const initiaValues = ContactValues
    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: initiaValues
    })

    async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            {/* <FormLabel>Email</FormLabel> */}
                            <FormControl>
                                <Input placeholder='email' {...field} className=' input-field bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            {/* <FormLabel>Event Description</FormLabel> */}
                            <FormControl>
                                <Input placeholder='number' {...field} className=' input-field bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="codePostal"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            {/* <FormLabel>Event Description</FormLabel> */}
                            <FormControl>
                                <Input placeholder='Code Postal' {...field} className=' input-field bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-between">
                    <FormField
                        control={form.control}
                        name="owner"
                        render={({ field }) => (
                            <FormItem className="flex items-center justify-between gap-10">
                                <Label htmlFor="owner">Propriétaire</Label>
                                <FormControl>
                                    <Switch
                                        id="owner"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <Label htmlFor="owner">Locataire</Label>
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="w-full">
                    Contacter
                </Button>
            </form>
        </Form>
    )
}
