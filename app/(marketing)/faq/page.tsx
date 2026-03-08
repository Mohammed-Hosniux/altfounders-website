import { faqs, siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export default function FAQPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="FAQ"
              title="Your questions, answered"
              align="left"
            />
            <p className="mt-4 text-sm text-zinc-600">
              Still have questions? We&apos;d love to help.
            </p>
            <div className="mt-6">
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                size="sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
