import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const teamMembers = [
  {
    name: "Abdelrahman Ayoub",
    role: "Founder & CEO",
    image: "/team/abdelrahman.png",
  },
  {
    name: "Mohammed Hosni",
    role: "Co-Founder",
    image: "/team/mohammed.jpeg",
  },
  {
    name: "Reel Elfai",
    role: "Co-Founder",
    image: "/team/reel.png",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-sky-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Who We Are"
            title="Meet The Team"
            description="Alt Founders was built by a team of builders, operators, product designers, and systems engineers who've spent years helping founders grow before building our own AI infrastructure."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <AnimateOnScroll key={member.name}>
              <div className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-cyan-100/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan-500">
                  {member.role}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
