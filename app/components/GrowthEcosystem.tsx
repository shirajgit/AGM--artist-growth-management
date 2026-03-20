"use client";

import { motion } from "framer-motion";

const steps = [
  "Brand Identity",
  "Content Infrastructure",
  "Platform Discoverability",
  "Audience Growth",
  "Monetization Readiness",
];

export default function GrowthEcosystem() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Artist Growth{" "}
          <span className="text-orange-400">Ecosystem</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          A structured framework where each layer strengthens the next —
          creating a complete digital system for long-term growth and monetization.
        </motion.p>

        {/* Pipeline */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative px-6 py-4 rounded-xl 
                bg-white/5 border border-white/10 backdrop-blur-xl
                hover:bg-white/10 hover:-translate-y-1 transition"
              >
                <p className="text-sm md:text-base font-medium">
                  {step}
                </p>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl transition" />
              </motion.div>

              {/* Arrow */}
              {i !== steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="hidden md:flex mx-3 text-orange-400 text-xl"
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Flow */}
        <div className="mt-12 md:hidden flex flex-col items-center gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-sm p-4 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              {step}
              {i !== steps.length - 1 && (
                <div className="text-orange-400 mt-2">↓</div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}