"use client";

import { motion } from "framer-motion";

// Replace these URLs with actual certification logos
const certifications = [
  { name: "Clutch", src: "/logos/clutch.png" },
  { name: "HubSpot", src: "/logos/hubspot.png" },
  { name: "Google Analytics", src: "/logos/google-analytics.png" },
  { name: "LinkedIn Certified", src: "/logos/linkedin.png" },
  { name: "Market Motive", src: "/logos/market-motive.png" },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12"
        >
          CERTIFICATIONS
        </motion.h2>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-transform"
            >
              <img
                src={cert.src}
                alt={cert.name}
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}