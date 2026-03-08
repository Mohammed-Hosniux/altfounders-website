import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalEmbed } from "@/components/CalEmbed";

export function CTA() {
  return (
    <section id="book-call" className="relative overflow-hidden bg-white">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-sky-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl lg:text-5xl">
              Book a Free{" "}
              <span className="gradient-text">Consultation Call</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              See exactly how AI can automate the work slowing your business
              down. We&apos;ll walk you through real systems we&apos;ve built
              for founders like you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12">
          <CalEmbed />
        </div>

      </div>
    </section>
  );
}
