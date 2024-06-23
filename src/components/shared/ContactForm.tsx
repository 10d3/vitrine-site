'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/validation'
import { ContactValues } from '@/lib'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { PhoneInput } from '../ui/phone-input'

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
                            {/* <FormLabel>Correo electrónico</FormLabel> */}
                            <FormControl>
                                <Input placeholder='Correo electrónico' {...field} className=' input-field bg-white' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            {/* <FormLabel>Nombre y Apellidos</FormLabel> */}
                            <FormControl>
                                <Input placeholder='Nombre y Apellidos' {...field} className=' input-field bg-white' />
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
                            {/* <FormLabel>Número de teléfono</FormLabel> */}
                            <FormControl>
                            <PhoneInput
                            placeholder="Número de teléfono"
                            {...field}
                            className='bg-white'
                          />
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
                            {/* <FormLabel>Codigo postal de la vivienda</FormLabel> */}
                            <FormControl>
                                <Input placeholder='Codigo postal de la vivienda' {...field} className=' input-field bg-white' />
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
                                <FormLabel htmlFor="owner">Soy Propietario</FormLabel>
                                <FormControl>
                                    <Switch
                                        id="owner"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel htmlFor="owner">Soy inquilino</FormLabel>
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="w-full bg-custom-primary hover:bg-custom-button-secondary">
                    Contacter
                </Button>
            </form>
        </Form>
    )
}
