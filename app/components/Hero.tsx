"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center text-white overflow-hidden">
       
         <Hero3D></Hero3D>

      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80"
        alt="hero"
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-purple-600/20" />

      {/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
  
  {/* LEFT */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    {/* Tag */}
    <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-5">
      AI-Powered Growth System
    </p>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
      Build Your <br />
      <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Global Artist Brand
      </span>
    </h1>

    {/* Highlight */}
    <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md">
      🚀 AI-Powered Artist Growth Management
    </div>

    {/* Description */}
    <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
      A structured digital system to help artists and creators build a 
      strong online presence, grow consistently, and unlock real 
      monetization opportunities.
    </p>

    {/* CTA */}
    <div className="mt-8 flex gap-4 flex-wrap">
      <a href="#audit">
      <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 rounded-lg font-medium shadow-lg hover:scale-[1.04] transition-all duration-200">
        Start Growth
      </button>
</a>
 
    <a href="#plans">
      <button className="border border-white/20 px-6 py-3 rounded-lg backdrop-blur-md hover:bg-white hover:text-black transition-all duration-200">
        View Plans
      </button></a>
    </div>

    {/* Trust Indicators */}
    <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
      <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
        ✔ No monthly fees
      </div>
      <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
        ✔ Cancel anytime
      </div>
      <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
        ✔ 100% ownership
      </div>
    </div>
  </motion.div>

  {/* RIGHT SIDE */}
  <div className="hidden md:flex justify-end">
    <div className="grid grid-cols-3 gap-4">
      {[
           "/artist01.webp",
            "/artist03.webp",
            "/artist05.webp",
            "/artist02.webp",
            "/artist06.webp",
            "/artist04.webp"
                        
      ].map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="w-36 h-44 relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition"
        >
          <Image src={img} alt="artist" fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* Bottom Strip */}
      <div className="absolute bottom-6 w-full flex justify-center gap-10 text-xs text-gray-400 backdrop-blur-md">
        <span>📞 +91 63924 25516</span>
        <span>🌐 zephiredigital.com</span>
      </div>
    </section>
  );
}