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
            Trouvez votre prochaine maison de rêve
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Inscrivez-vous dès maintenant pour accéder à nos meilleures offres
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
              <div>
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
              </div>
              <Button className="bg-custom-button-primary hover:bg-custom-button-secondary" disabled={form.formState.isSubmitting} type="submit">{form.formState.isSubmitting ? <Loader/> : "Je m'inscris"}</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}