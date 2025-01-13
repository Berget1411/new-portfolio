"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { sendMessage } from "@/actions/sendMessage";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const form = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await sendMessage(data);
      if (result.success) {
        form.reset();
        toast({
          title: "Success",
          description: result.success,
          action: <ToastAction altText='Close'>Close</ToastAction>,
        });
      } else if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
          action: <ToastAction altText='Close'>Close</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `An unexpected error occurred: ${error}`,
        variant: "destructive",
        action: <ToastAction altText='Close'>Close</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <motion.div
        className='relative mx-auto max-w-[600px]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background geometric elements */}
        <div className='absolute inset-0 -rotate-6 scale-[1.15] z-0'>
          <div className='absolute right-0 top-0 w-1/2 h-1/2 border-t-2 border-r-2 border-primary/20 rounded-tr-[2rem]' />
          <div className='absolute left-0 bottom-0 w-1/2 h-1/2 border-b-2 border-l-2 border-primary/20 rounded-bl-[2rem]' />
        </div>

        {/* Main form container */}
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className='relative space-y-6 rounded-xl border border-primary/20 bg-background/80 p-6 md:p-8 z-10'
        >
          <div className='absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] rounded-xl'>
            <div className='absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]'></div>
          </div>

          <div className='relative z-20 flex gap-4 max-sm:flex-col'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-foreground'>{t("name")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("placeholderName")}
                      className='bg-background/80 border-primary/20 focus:border-primary/40 transition-colors'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-foreground'>
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("placeholderEmail")}
                      className='bg-background/80 border-primary/20 focus:border-primary/40 transition-colors'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='relative z-20'>
                <FormLabel className='text-foreground'>
                  {t("message")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={t("placeholderMessage")}
                    className='min-h-[120px] bg-background/80 border-primary/20 focus:border-primary/40 transition-colors'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <motion.div
            className='relative z-20'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type='submit'
              className='w-full relative overflow-hidden'
              disabled={isSubmitting}
            >
              <span className='relative'>
                {isSubmitting ? "Sending..." : t("send")}
              </span>
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </Form>
  );
}
