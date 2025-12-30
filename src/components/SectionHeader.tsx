import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className={`block text-sm uppercase tracking-[0.2em] font-bold mb-3 ${light ? "text-accent" : "text-secondary"}`}>
            {subtitle}
          </span>
        )}
        <h2 className={`font-display text-3xl md:text-5xl font-medium mb-4 ${light ? "text-white" : "text-primary"}`}>
          {title}
        </h2>
        <div className={`h-1 w-24 bg-accent mt-6 ${centered ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
