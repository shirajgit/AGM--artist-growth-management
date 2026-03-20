 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero3D from "./Hero3D";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Music Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "Before working with this system, my content had no direction. Now I have a clear strategy, better engagement, and real audience growth.",
  },
  {
    name: "Sneha Kapoor",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "The branding and structure completely changed how people see my profile. I started getting collaboration opportunities within weeks.",
  },
  {
    name: "Rahul Verma",
    role: "YouTuber",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80",
    quote:
      "It’s not just management — it’s a complete growth system. My channel is now optimized, discoverable, and monetization-ready.",
  },
];


const Testimonials = () => {
  return (
    <div>
      
<section id="testimonials" className="py-28">
 

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-semibold text-center mb-4"
  >
    What Creators Say
  </motion.h2>

  <p className="text-center text-gray-400 mb-12 text-sm">
    Real creators. Real growth. Real results.
  </p>

  {/* Cards */}
  <div className="flex gap-6 overflow-x-auto px-6">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className="min-w-[340px] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-300"
      >
        {/* Quote */}
        <p className="text-gray-300 leading-relaxed">
          “{t.quote}”
        </p>

        {/* User */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 relative rounded-full overflow-hidden border border-white/10">
            <Image src={t.image} alt={t.name} fill className="object-cover" />
          </div>

          <div>
            <h4 className="font-medium text-white">{t.name}</h4>
            <p className="text-xs text-gray-400">{t.role}</p>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
      </motion.div>
    ))}
  </div>

  {/* Bottom Trust */}
  <div className="text-center mt-12 text-sm text-gray-400">
    Trusted by growing artists & creators worldwide 🌍
  </div>
</section>


      
    </div>
  )
}

export default Testimonials
