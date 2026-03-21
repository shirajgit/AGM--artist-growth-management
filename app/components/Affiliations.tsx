"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Affiliations() {
  const logos = [
    { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "YouTube", src: "/youtube.svg" },
    { name: "Spotify", src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg" },
    { name: "Apple Music", src: "https://cdn.worldvectorlogo.com/logos/apple-13.svg" },
    { name: "Meta", src: "/meta.svg" },
    { name: "Google", src: "/google.svg" },
  ];

  return (
    <section className="py-24 relative">
      
      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4"
        >
          Trusted <span className="text-orange-400">Platforms</span>
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          We work with and optimize across leading global platforms 
          powering the modern creator economy.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center p-6 rounded-2xl 
              bg-white/5 border border-white/10 backdrop-blur-xl 
              hover:bg-white/10 hover:-translate-y-1 transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={70}
                height={50}
                className="opacity-70 group-hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}