"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
  {
    name: "Arjun Patel",
    category: "Vlogger",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export default function Artists() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width / 1.5 : width / 1.5,
      behavior: "smooth",
    });
  };

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

        {/* Desktop Arrows */}
        <div className="hidden md:flex justify-end gap-3 mb-4">
          <button
            onClick={() => scroll("left")}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            →
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {artists.map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[260px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group hover:-translate-y-2 transition"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={artist.img}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{artist.name}</h3>
                <p className="text-sm text-gray-400">{artist.category}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}