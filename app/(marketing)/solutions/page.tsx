import { solutions } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Solutions"
          title="AI Infrastructure That Works From Day One"
          description="Whether you need a ready-to-deploy agent or a fully custom system, we give founders the AI infrastructure to automate growth, operations, and everything in between."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <Badge variant="outline">{solution.tag}</Badge>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {solution.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {solution.description}
              </p>
              <ul className="mt-8 space-y-3">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check className="h-4 w-4 shrink-0 text-cyan-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={solution.ctaHref} variant="secondary" size="lg">
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
