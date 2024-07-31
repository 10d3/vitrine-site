"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/validation";
import { ContactValues } from "@/lib";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { PhoneInput } from "../ui/phone-input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Loader } from "./loader";
import { sendEmail, sendEmailCustomer } from "@/lib/actions/resend";

export default function ContactForm() {
  const initiaValues = ContactValues;
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: initiaValues,
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    // console.log(values);
    await sendEmail(values)
    await sendEmailCustomer(values)
    form.reset()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Nombre y Apellidos</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Nombre y Apellidos"
                  {...field}
                  className=" input-field bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Correo electrónico</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Correo electrónico"
                  {...field}
                  className=" input-field bg-white"
                />
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
                  className="bg-white"
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
                <Input
                  placeholder="Codigo postal de la vivienda"
                  {...field}
                  className=" input-field bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center gap-2">
                {/* <FormLabel htmlFor="owner">Soy Propietario</FormLabel> */}
                <FormControl>
                  <Checkbox
                    id="owner"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel htmlFor="owner" className="text-[0.8rem]">
                  Declaro que soy mayor de 18 años, he leído y acepto las
                  siguientes condiciones de la{" "}
                  <Link
                    className="text-blue-500"
                    href="/politica-de-privacidad"
                  >
                    política de privacidad
                  </Link>
                  .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        {/* <Button
          type="submit"
          className="w-full bg-custom-primary hover:bg-custom-button-secondary"
        >
          Contacter
        </Button> */}
        <Button
          className=" w-full bg-custom-primary hover:bg-custom-button-secondary"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? <Loader /> : "Contacto"}
        </Button>
      </form>
    </Form>
  );
}
