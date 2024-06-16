'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewsletterSchema } from "@/lib/validation"
import { NewsletterValues } from "@/lib"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { NewsLetterAction } from "@/lib/actions/NewsLetterAction"
import { Loader } from "./loader"

export default function CallToAction() {
  const initiaValues = NewsletterValues
  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: initiaValues
  })

  async function onSubmit(values: z.infer<typeof NewsletterSchema>) {
    try {
      const result = await NewsLetterAction(values)
      if (result) {
        form.reset()
      }
    } catch (error) {
      return error
    }
  }
  return (
    <section className="w-[96%] md:w-full rounded-sm mb-12 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Encuentre la casa de sus sueños
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Regístrese ahora para acceder a nuestras mejores ofertas
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex space-x-2 flex-col md:flex-row gap-2 items-center">
              <div className="w-full flex items-center justify-center">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-[90%] md:w-full">
                      {/* <FormLabel>Email</FormLabel> */}
                      <FormControl>
                        <Input placeholder='Correo electrónico' {...field} className='w-full input-field bg-white' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className=" md:w-auto bg-custom-button-primary hover:bg-custom-button-secondary" disabled={form.formState.isSubmitting} type="submit">{form.formState.isSubmitting ? <Loader /> : "Deseo inscribirme"}</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}