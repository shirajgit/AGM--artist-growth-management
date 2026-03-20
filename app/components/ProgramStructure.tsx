"use client";

import { motion } from "framer-motion";

export default function ProgramStructure() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-pink-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          Program <span className="text-orange-400">Structure</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* MUSIC EDITION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl transition" />

            <h3 className="text-2xl font-semibold mb-4 text-orange-400">
              Music Edition
            </h3>

            <p className="text-sm text-gray-400 mb-4">Ideal For:</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Singers", "Musicians", "Producers", "Bands"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-3">Focus Areas:</p>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Music branding",
                "Streaming optimization",
                "Distribution",
                "Release campaigns",
                "Monetization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-orange-400">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CREATOR EDITION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl transition" />

            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Creator Edition
            </h3>

            <p className="text-sm text-gray-400 mb-4">Ideal For:</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Content Creators",
                "Influencers",
                "Podcasters",
                "Educators",
                "Vloggers",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-3">Focus Areas:</p>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Audience growth",
                "Creator branding",
                "Discoverability",
                "Content strategy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-purple-400">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}