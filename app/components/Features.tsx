"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Search, DollarSign } from "lucide-react";

const features = [
  {
    title: "AI-Powered Strategy",
    desc: "Data-driven growth system powered by AI insights and automation.",
    icon: Cpu,
  },
  {
    title: "Professional Digital Identity",
    desc: "Build a strong, consistent and recognizable creator brand.",
    icon: Sparkles,
  },
  {
    title: "Discoverability Optimization",
    desc: "Optimize your presence to get found across platforms and search.",
    icon: Search,
  },
  {
    title: "Monetization Readiness",
    desc: "Turn your audience into revenue with structured systems.",
    icon: DollarSign,
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-14"
        >
          Feature <span className="text-orange-400">Highlights</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors shadow-lg backdrop-blur-md"
              >
                <div className="w-12 h-12 mb-4 text-orange-400">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.desc}</p>

                {/* Optional hover effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}