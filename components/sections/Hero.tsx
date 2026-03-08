import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Subtle gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-100/30 blur-3xl animate-blob-delay" />
        <div className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-50/40 blur-3xl animate-blob-delay-2" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="accent">AI-Powered Growth Systems &amp; Agents for Business Founders</Badge>
            </div>

            <h1 className="text-5xl font-extrabold text-slate-800 sm:text-6xl lg:text-7xl leading-[1.05]">
              We Build AI Systems That Get Your Business the{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">Leads, Sales, and Revenue It Deserves.</span>
            </h1>

            <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Are you ready to run your business with AI-powered systems that
              replace manual work and the operations while you focus on the
              decisions that actually drive growth?
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="#book-call" size="lg">
                Book Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
