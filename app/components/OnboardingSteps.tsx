"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  "Digital Audit",
  "Brand Structuring",
  "Profile Optimization",
  "Content Strategy Setup",
  "Growth Execution Begins",
];

export default function OnboardingSteps() {
  return (
    <section className="py-28 bg-black text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-center mb-4"
      >
        WHAT HAPPENS AFTER <span className="text-orange-400">ONBOARDING</span>
      </motion.h2>

      <p className="text-center text-gray-400 mb-12 text-sm">
        A structured process to optimize your brand, content, and growth strategy.
      </p>

      {/* Steps Cards */}
      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium text-sm">Step {i + 1}</span>
            </div>
            <p className="text-gray-300 text-sm">{step}</p>

            {/* Optional glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 text-sm text-gray-400">
        Each step is carefully designed to set you up for success.
      </div>
    </section>
  );
}