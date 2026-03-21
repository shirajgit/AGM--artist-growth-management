"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

const artists = [
  {
    name: "Aarav Mehta",
    category: "Music Producer",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    name: "Riya Sharma",
    category: "Content Creator",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
  {
    name: "Kabir Khan",
    category: "YouTuber",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80",
  },
  {
    name: "Neha Verma",
    category: "Influencer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

// duplicate for infinite scroll
const loopData = [...artists, ...artists];

export default function Artists() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // AUTO SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!el) return;

      el.scrollLeft += 1;
      scrollAmount += 1;

      // reset for infinite illusion
      if (scrollAmount >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-pink-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-center mb-14"
        >
          Artists We <span className="text-orange-400">Work With</span>
        </motion.h2>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {loopData.map((artist, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative min-w-[260px] rounded-2xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl 
              transition duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={artist.img}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 p-5">
                <h3 className="font-semibold text-lg text-white">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {artist.category}
                </p>
              </div>

              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/20 to-pink-500/20 transition" />
            </motion.div>
          ))}
        </div>

        {/* Edge Fade (pro look) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}