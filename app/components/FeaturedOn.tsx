"use client";

import { motion } from "framer-motion";

const mediaLogos = [
  { name: "Forbes", src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Forbes_logo.svg" },
  { name: "Entrepreneur", src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Entrepreneur_logo.svg" },
  { name: "Business Insider", src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Business_Insider_Logo.svg" },
  { name: "YourStory", src: "https://upload.wikimedia.org/wikipedia/en/0/01/YourStory_logo.png" },
  { name: "TechCrunch", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/TechCrunch_logo.svg" },
  { name: "Unsplash", src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Unsplash_logo.svg" },
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
              className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-transform flex items-center justify-center"
              style={{ minWidth: "100px", minHeight: "60px" }} // ensure tiny SVGs still show
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}