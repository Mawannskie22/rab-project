"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/site";

export default function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = siteConfig.analyticsId;
    if (!id || id === "G-XXXXXXX") return;

    const existing = document.querySelector('script[data-analytics="costguard"]');
    if (existing) return;

    const script = document.createElement("script");
    script.setAttribute("data-analytics", "costguard");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}
