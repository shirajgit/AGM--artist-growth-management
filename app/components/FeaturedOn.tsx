"use client";

import { motion } from "framer-motion";

// Replace these URLs with your actual logo images
const mediaLogos = [
  { name: "Forbes", src: "/logos/forbes.png" },
  { name: "Entrepreneur", src: "/logos/entrepreneur.png" },
  { name: "Business Insider", src: "/logos/business-insider.png" },
  { name: "YourStory", src: "/logos/yourstory.png" },
  { name: "TechCrunch", src: "/logos/techcrunch.png" },
];

export default function FeaturedOn() {
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
          FEATURED ON
        </motion.h2>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {mediaLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-transform"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}