"use client";
 
import { motion } from "framer-motion";
import { SiTechcrunch, SiUnsplash, SiSpotify, SiGoogle } from "react-icons/si";

const mediaLogos = [
 
  { name: "TechCrunch", Icon: SiTechcrunch },
  { name: "Unsplash", Icon: SiUnsplash },
  { name: "Spotify", Icon: SiSpotify },
  { name: "Google", Icon: SiGoogle },
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

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {mediaLogos.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-transform flex items-center justify-center"
              style={{ minWidth: "100px", minHeight: "60px" }}
            >
              <Icon className="text-white h-12 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}