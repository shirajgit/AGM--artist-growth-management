"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Affiliations() {
  const logos = [
    { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "YouTube", src: "/youtube.svg" },
    { name: "Spotify", src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg" },
    { name: "Apple", src: "https://cdn.worldvectorlogo.com/logos/apple-13.svg" },
    { name: "Meta", src: "/meta.svg" },
    { name: "Google", src: "/google.svg" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Powering Growth Across{" "}
          <span className="text-orange-400">Global Platforms</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-14 max-w-xl mx-auto"
        >
          Optimized for the platforms that drive the modern creator economy.
        </motion.p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative flex items-center justify-center p-6 rounded-2xl 
              bg-white/5 border border-white/10 backdrop-blur-xl 
              hover:bg-white/10 transition"
            >
              {/* Logo */}
              <Image
                src={logo.src}
                alt={logo.name}
                width={70}
                height={50}
                className="opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />

              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl transition" />
            </motion.div>
          ))}
        </div>

        {/* Bottom subtle trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-sm text-gray-500"
        >
          Trusted ecosystem powering creators worldwide
        </motion.p>
      </div>
    </section>
  );
}