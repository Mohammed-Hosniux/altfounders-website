import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base text-zinc-600">{description}</p>
            )}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

