import { SectionHeader } from "@/components/ui/SectionHeader";

export default function BlogIndexPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Insights on AI agents, automation, and scaling operations"
          description="Learn how founders and operators are using custom AI systems to win back time and unlock new growth."
          align="left"
        />

        <div className="mt-16 rounded-2xl border border-zinc-200 bg-white p-12 text-center">
          <p className="text-zinc-500">
            New articles coming soon. Stay tuned.
          </p>
        </div>
      </div>
    </div>
  );
}
