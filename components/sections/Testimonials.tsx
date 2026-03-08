import { testimonials } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Results"
            title="Proven results across teams and industries"
            description="See how founders and operators are using AltFounders agents to scale faster."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 0.15}>
              <div className="glass-card p-6 relative">
                <div className="absolute -top-3 left-6">
                  <Quote className="h-6 w-6 text-cyan-300 fill-cyan-100" />
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.role}, {t.company}
                  </p>
                </div>
                <div className="mt-3 rounded-lg bg-cyan-50 border border-cyan-100 px-3 py-1.5">
                  <p className="text-xs font-medium text-cyan-700">
                    {t.stat}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
