"use client";

import { motion } from "framer-motion";

const comparisons = [
  { feature: "Random posting", zephire: "Structured growth systems" },
  { feature: "Short campaigns", zephire: "Long‑term creator ecosystem" },
  { feature: "Platform activity", zephire: "Discoverability focus" },
  { feature: "Content management", zephire: "Digital brand architecture" },
];

export default function WhyZephireTable() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-12"
        >
          WHY <span className="text-orange-400">ZEPHIRE DIGITAL</span>  
        </motion.h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-white/10 text-left">
            <thead>
              <tr className="bg-white/5 backdrop-blur-xl">
                <th className="p-4 border-b border-white/10">Typical Agencies</th>
                <th className="p-4 border-b border-white/10">Zephire Digital</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:bg-white/10 transition"
                >
                  <td className="p-4 border-b border-white/10">{row.feature}</td>
                  <td className="p-4 border-b border-white/10 text-orange-400 font-medium">
                    {row.zephire}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}