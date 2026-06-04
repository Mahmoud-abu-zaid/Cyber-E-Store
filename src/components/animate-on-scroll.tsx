"use client";

import { motion } from "framer-motion";

export default function AnimateOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string; }) {

  return (
    <div>
      <div className="sm:block hidden">
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {children}
        </motion.div>
      </div>

      <div className="block sm:hidden">
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          viewport={{
            once: false,
            amount: 0.05,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}