"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Posting Approach",
    typical: "Random posting",
    zephire: "Structured growth systems",
  },
  {
    feature: "Campaign Style",
    typical: "Short campaigns",
    zephire: "Long-term creator ecosystem",
  },
  {
    feature: "Focus",
    typical: "Platform activity",
    zephire: "Discoverability-driven growth",
  },
  {
    feature: "Management",
    typical: "Basic content handling",
    zephire: "Full digital brand architecture",
  },
];

export default function WhyZephire() {
  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* Glow BG */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-center mb-6"
        >
          Why <span className="text-orange-400">Zephire Digital</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-14 max-w-xl mx-auto">
          Most agencies focus on activity. We build structured systems that scale creators into long-term digital brands.
        </p>

        {/* Cards */}
        <div className="space-y-6">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 items-center 
              p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
              hover:bg-white/10 transition group"
            >
              
              {/* Feature */}
              <div className="text-sm text-gray-400">
                {row.feature}
              </div>

              {/* Typical */}
              <div className="flex items-center gap-3 text-red-400">
                <X className="w-5 h-5" />
                <span className="text-gray-300">{row.typical}</span>
              </div>

              {/* Zephire */}
              <div className="flex items-center gap-3 text-green-400 font-medium">
                <Check className="w-5 h-5" />
                <span>{row.zephire}</span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-sm font-medium shadow-lg">
            Built for long-term creator success 🚀
          </span>
        </motion.div>
      </div>
    </section>
  );
}