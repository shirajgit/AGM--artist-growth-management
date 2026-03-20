"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const workflowSteps = [
  "Digital Audit",
  "Brand Structuring",
  "Platform Optimization",
  "Growth Execution",
  "Monetization Setup",
  "Performance Tracking",
];

export default function ProgramWorkflow() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4"
        >
          PROGRAM <span className="text-orange-400">WORKFLOW</span>
        </motion.h2>
        <p className="text-gray-400 mb-12 text-sm">
          Timeline of 6 steps
        </p>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-orange-400 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium text-sm">Step {i + 1}</span>
              </div>
              <p className="text-gray-300 text-sm">{step}</p>

              {/* Optional hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}