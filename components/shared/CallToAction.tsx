"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterSchema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { NewsLetterAction } from "@/lib/actions/NewsLetterAction";
import { Loader } from "./loader";
import { NewsletterValues } from "@/lib/values";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";
import RollingText from "./landing/rolling-text";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CallToAction() {
  const initiaValues = NewsletterValues;
  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: initiaValues,
  });

  async function onSubmit(values: z.infer<typeof NewsletterSchema>) {
    try {
      const result = await NewsLetterAction(values);
      if (result) {
        form.reset();
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <SectionWrapper id="newsletter">
      <Card className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-zinc-950/5">
        <div className="pointer-events-none absolute inset-0 bg-foreground/[0.02] rounded-3xl" />
        <div className="relative z-10">
          <SectionHeader
            eyebrow="NEWSLETTER & NOVEDADES"
            title={<InViewReveal text="Mantente Informado del Mercado Inmobiliario" />}
            description={
              <ScrollRevealText
                className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
                text={[
                  "Recibe consejos exclusivos sobre alquiler garantizado, cambios normativos en viviendas turísticas en Valencia y estrategias para rentabilizar tu patrimonio.",
                ]}
              />
            }
            align="center"
            className="mb-8"
          />

          <div className="mx-auto w-full max-w-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-3.5 size-4 text-muted-foreground pointer-events-none" />
                          <Input
                            placeholder="tu-correo@ejemplo.com"
                            {...field}
                            className="w-full pl-10 h-12 rounded-xl bg-background border-border/70 focus-visible:ring-primary"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-left text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full sm:w-auto h-12 px-6 rounded-xl font-medium shrink-0 transition-transform duration-150 active:scale-[0.98]"
                  disabled={form.formState.isSubmitting}
                  type="submit"
                >
                  {form.formState.isSubmitting ? (
                    <Loader />
                  ) : (
                    <RollingText text="Deseo inscribirme" />
                  )}
                </Button>
              </form>
            </Form>
            <p className="mt-4 text-xs text-muted-foreground">
              Sin spam. Puedes darte de baja en cualquier momento con un solo clic.
            </p>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
