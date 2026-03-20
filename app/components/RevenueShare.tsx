"use client";

import { motion } from "framer-motion";

export default function RevenueShare() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-8"
        >
          REVENUE <span className="text-orange-400">SHARE MODEL</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg max-w-md mx-auto"
        >
          <p className="text-lg font-medium mb-4">
            <span className="text-orange-400">Creator</span> — 60% | <span className="text-pink-400">Zephire Digital</span> — 40%
          </p>

          <p className="text-sm text-gray-300">
            Applies only to revenue streams enabled through AGM. Creators retain full ownership.
          </p>

          {/* Optional hover glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
        </motion.div>
      </div>
    </section>
  );
}