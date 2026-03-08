"use client";

import { CircleCheck, CircleX, Frown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const wants = [
  {
    title: "Runs and grows without you doing everything manually",
    description:
      "AI-powered systems handle your content, lead generation, and daily operations — freeing you to focus on strategy and the work that actually moves the needle.",
  },
  {
    title: "Attracts the right leads and converts them consistently",
    description:
      "A smart AI engine that researches, qualifies, and routes leads to you automatically — so your pipeline stays full without cold outreach or guesswork.",
  },
  {
    title: "Builds authority and trust through consistent content",
    description:
      "Your personal brand and content run on autopilot — every post, every platform, every week — in your voice, without you spending hours writing or recording.",
  },
  {
    title: "Scales without adding headcount or overhead",
    description:
      "AI agents handle the repetitive work that would normally require 2–3 extra hires — giving you the output of a bigger team at a fraction of the cost.",
  },
  {
    title: "Operates with systems that work 24/7, even when you don't",
    description:
      "From follow-ups to reporting to customer onboarding — your business keeps moving even when you step away, because the systems never stop.",
  },
  {
    title: "Feels modern, efficient, and built for where business is going",
    description:
      "You're not just keeping up with AI — you're ahead of it. Your business runs on infrastructure that your competitors are still trying to figure out.",
  },
];

const pains = [
  {
    title: "You're stuck doing repetitive work that drains your time",
    description:
      "Hours spent every week on tasks like content creation, data entry, lead research, and follow-ups — work that keeps you busy but doesn't grow the business.",
  },
  {
    title: "Your lead generation feels inconsistent and unpredictable",
    description:
      "Some months are great, others are dry. Without a system, you're relying on referrals, luck, or manual outreach that doesn't scale.",
  },
  {
    title: "Your content is inconsistent or nonexistent",
    description:
      "You know you should be posting. You know personal branding matters. But between running the business and everything else, content always falls to the bottom.",
  },
  {
    title: "You're wearing too many hats and it's slowing growth",
    description:
      "You're the CEO, marketer, sales rep, and ops manager all at once. There's no bandwidth left for the big-picture work that actually scales.",
  },
  {
    title: "You've tried tools before but nothing stuck",
    description:
      "You've signed up for platforms, tested automations, maybe even hired help — but nothing was built around how your business actually works.",
  },
  {
    title: "You know AI is the future but don't know where to start",
    description:
      "The noise around AI is overwhelming. You want to use it, but you need someone to build the right system — not just hand you another tool.",
  },
];

export function PainSection() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-section-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200/80 border border-slate-300/50">
              <Frown className="h-7 w-7 text-slate-500" />
            </div>
          </div>
          <SectionHeader
            eyebrow="The Business Needs & Pains"
            title="You Know the Feeling..."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/2 p-6 sm:p-8 text-left border-b border-r border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600" />
                      <span className="text-lg font-semibold text-slate-900">
                        You&apos;re here because you want a business that...
                      </span>
                    </div>
                  </th>
                  <th className="w-1/2 p-6 sm:p-8 text-left border-b border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-1 rounded-full bg-gradient-to-b from-red-400 to-red-600" />
                      <span className="text-lg font-semibold text-slate-900">
                        But your current business experience is actually...
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {wants.map((want, i) => (
                  <tr key={i} className={i < wants.length - 1 ? "border-b border-slate-200/40" : ""}>
                    <td className="p-6 sm:px-8 sm:py-5 align-top border-r border-slate-200/60">
                      <div className="flex gap-4">
                        <CircleCheck className="h-5 w-5 shrink-0 mt-0.5 text-cyan-500" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {want.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                            {want.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 sm:px-8 sm:py-5 align-top">
                      <div className="flex gap-4">
                        <CircleX className="h-5 w-5 shrink-0 mt-0.5 text-red-400" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {pains[i].title}
                          </p>
                          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                            {pains[i].description}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
