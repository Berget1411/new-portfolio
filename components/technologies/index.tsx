"use client";

import { motion } from "framer-motion";
import Technology from "./technology";
import { mainTechStack, otherTechStack } from "@/assets/tech-stack";
import { useTranslations } from "next-intl";

export default function Technologies() {
  const t = useTranslations("technologies");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className='py-16 md:py-24' id='technologies'>
      <div className='main-width'>
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

        <div className='space-y-16'>
          {/* Main Technologies */}
          <div className='space-y-6'>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-xl md:text-2xl font-semibold text-center'
            >
              {t("mainTech")}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-2 md:grid-cols-4 gap-4'
            >
              {mainTechStack.map((tech, index) => (
                <Technology
                  key={tech.name}
                  {...tech}
                  delay={index * 0.1}
                  isMain={true}
                />
              ))}
            </motion.div>
          </div>

          {/* Other Technologies */}
          <div className='space-y-6'>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-xl md:text-2xl font-semibold text-center'
            >
              {t("otherTech")}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
            >
              {otherTechStack.map((tech, index) => (
                <Technology
                  key={tech.name}
                  {...tech}
                  delay={index * 0.1}
                  isMain={false}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
