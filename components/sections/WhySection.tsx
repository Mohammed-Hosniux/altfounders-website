import { benefits, stats } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function WhySection() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Why AltFounders"
            title="Built for founders who move fast"
            description="We don't sell software. We build AI systems tailored to your workflows that deliver measurable results from day one."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 0.1}>
              <Card hover>
                <benefit.icon className="h-5 w-5 text-cyan-500" />
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {benefit.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-16 grid grid-cols-3 gap-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
            {stats.map((stat) => (
              <div key={stat.label} className="relative">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
