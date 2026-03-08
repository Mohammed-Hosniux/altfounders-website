import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  gradient?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  gradient,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl",
          gradient && "gradient-text"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-500">{description}</p>
      )}
    </div>
  );
}
