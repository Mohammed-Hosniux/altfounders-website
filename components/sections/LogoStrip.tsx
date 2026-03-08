"use client";

import { logoCompanies } from "@/lib/constants";

export function LogoStrip() {
  const doubled = [...logoCompanies, ...logoCompanies];

  return (
    <section className="border-y border-slate-200/60 bg-white/50 backdrop-blur-sm py-8 overflow-hidden">
      <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-400 mb-6">
        Trusted by teams at
      </p>
      <div className="relative">
        <div className="flex animate-marquee w-max gap-12 px-6">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-lg font-semibold text-slate-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
