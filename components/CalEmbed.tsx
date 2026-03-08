"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, ((...args: unknown[]) => void) & { q?: unknown[] }>;
      q?: unknown[];
    };
  }
}

export function CalEmbed() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Cal.com embed loader
    (function (C: typeof window, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function () {
          const cal = C.Cal!;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.head.appendChild(d.createElement("script"));
            s.src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api as unknown as { q: unknown[] }, arguments);
            } as unknown as ((...args: unknown[]) => void) & { q: unknown[] };
            const namespace = ar[1] as string;
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || api;
              p(cal.ns![namespace] as unknown as { q: unknown[] }, ar);
              p(cal as unknown as { q: unknown[] }, [
                "initNamespace",
                namespace,
              ]);
            } else p(cal as unknown as { q: unknown[] }, ar);
            return;
          }
          p(cal as unknown as { q: unknown[] }, ar);
        } as typeof window.Cal);
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "30min", { origin: "https://app.cal.com" });

    window.Cal!.ns!["30min"]!("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: "altfounders/30min",
      layout: "month_view",
    });

    window.Cal!.ns!["30min"]!("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      styles: { branding: { brandColor: "#06b6d4" } },
    });
  }, []);

  return (
    <div
      id="cal-inline-embed"
      className="w-full overflow-hidden rounded-2xl"
      style={{ minHeight: "700px", width: "100%" }}
    />
  );
}
