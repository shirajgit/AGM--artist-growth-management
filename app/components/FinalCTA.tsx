"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-28 text-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-pink-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.15),transparent_70%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Start Building Your <br />
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Digital Artist Brand
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          Stop guessing your growth strategy. Build a structured digital system 
          that helps you grow consistently, reach the right audience, and 
          unlock real monetization opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 font-medium shadow-lg hover:scale-105 transition duration-200">
            Book Consultation
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition duration-200">
            View Plans
          </button>

        </div>

        {/* Trust Line */}
        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
          <span>✔ No monthly fees</span>
          <span>✔ Cancel anytime</span>
          <span>✔ 100% ownership</span>
        </div>
      </motion.div>
    </section>
  );
}