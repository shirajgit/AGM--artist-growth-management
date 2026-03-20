"use client";

import { motion } from "framer-motion";

export default function CreatorEconomy() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          The Rise of the{" "}
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Creator Economy
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          The creator economy is now a multi-billion-dollar industry powered by platforms like{" "}
          <span className="text-white">YouTube</span>,{" "}
          <span className="text-white">Instagram</span>, and streaming services.
          <br /><br />
          Millions of creators publish content daily — but only a small percentage build 
          structured digital brands capable of{" "}
          <span className="text-orange-400">long-term growth</span> and{" "}
          <span className="text-orange-400">real monetization</span>.
        </motion.p>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            The{" "}
            <span className="text-white font-medium">
              AI-Powered Artist Growth Management
            </span>{" "}
            program bridges this gap — helping creators transform from 
            content publishers into{" "}
            <span className="text-orange-400 font-medium">
              scalable digital brands
            </span>.
          </p>
        </motion.div>

        {/* Stats (optional but powerful) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "100M+", label: "Creators Worldwide" },
            { value: "Daily", label: "Content Published" },
            { value: "Top 1%", label: "Earn Majority Revenue" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-orange-400">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}