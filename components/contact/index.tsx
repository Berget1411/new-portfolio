"use client";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <LampContainer>
      <div
        className='absolute inset-0 bg-grid-black/[0.08] dark:bg-grid-white/[0.03]'
        id='contact'
      >
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]'></div>
      </div>

      <div className='relative z-10 main-width'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='space-y-2 text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold'>{t("title")}</h2>
          <p className='text-muted-foreground'>{t("description")}</p>
        </motion.div>
        <ContactForm />
      </div>
    </LampContainer>
  );
}
