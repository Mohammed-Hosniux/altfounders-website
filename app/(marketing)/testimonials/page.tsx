import { testimonials } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer stories"
          title="Proven results across teams and industries"
          description="AltFounders partners with high-growth teams to automate thousands of hours of manual work and unlock new growth."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-3 left-6">
                <Quote className="h-6 w-6 text-violet-300 fill-violet-100" />
              </div>
              <div className="border-l-2 border-violet-500 pl-4">
                <p className="text-sm text-zinc-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-zinc-900">
                  {t.author}
                </p>
                <p className="text-xs text-zinc-500">
                  {t.role}, {t.company}
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-violet-50 px-3 py-1.5">
                <p className="text-xs font-medium text-violet-700">{t.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
