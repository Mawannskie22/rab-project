"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isContactPage = pathname === "/kontak";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isContactPage ? { opacity: 0, y: 24 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={isContactPage ? { opacity: 0, y: -24 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
