import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type LoadingProps = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          onAnimationComplete={isLoading ? undefined : () => {}}
        >
          <div className="relative w-85 h-40 overflow-hidden">
            <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-white z-10" initial={{ y: 0 }} animate={{ y: "-100%" }} transition={{ duration: 1.2, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-10" initial={{ y: 0 }} animate={{ y: "100%" }} transition={{ duration: 1.2, ease: "easeInOut" }} />
            <Image src="/img/Website logo.webp" alt="Logo" width={420} height={120} priority />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
