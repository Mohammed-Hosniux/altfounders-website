"use client";

import { howItWorksSteps } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="How It Works"
            title="From discovery to deployment in 3 steps"
            description="Our proven process takes you from initial strategy call to a live AI agent in under 30 days."
          />
        </AnimateOnScroll>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          {/* Animated connecting line between steps */}
          <div className="absolute top-10 left-0 right-0 hidden lg:block">
            <div className="mx-auto max-w-[70%] relative h-0.5">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
              {/* Animated glow that travels along the line */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-3 w-16 rounded-full bg-cyan-400/40 blur-md"
                initial={{ left: "0%" }}
                whileInView={{ left: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </div>

          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.25 }}
            >
              {/* Step number circle */}
              <motion.div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-2xl font-bold text-white shadow-lg shadow-cyan-500/20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3 + i * 0.25,
                }}
              >
                {step.step}
              </motion.div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
