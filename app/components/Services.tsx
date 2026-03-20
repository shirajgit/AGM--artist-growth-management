import React from 'react'



import { motion } from "framer-motion";
import {
  Brush,
  Image as ImgIcon,
  Share2,
  Layout,
  Globe,
  TrendingUp,
  DollarSign,
  BarChart,
} from "lucide-react";

const services = [
  { title: "Branding", icon: Brush },
  { title: "Thumbnails", icon: ImgIcon },
  { title: "Social Media", icon: Share2 },
  { title: "Content Strategy", icon: Layout },
  { title: "Website", icon: Globe },
  { title: "Growth", icon: TrendingUp },
  { title: "Monetization", icon: DollarSign },
  { title: "Reporting", icon: BarChart },
];

const Services = () => {
  return (
    <div>
<section id="services" className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-semibold text-center mb-14"
    >
      Core <span className="text-orange-400">Services</span>
    </motion.h2>

    {/* Grid */}
    <div className="grid md:grid-cols-4 gap-6">
      {services.map((s, i) => {
        const Icon = s.icon;

        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
            hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500/20 to-pink-500/20 mb-4">
              <Icon className="text-orange-400 w-5 h-5" />
            </div>

            {/* Title */}
            <h3 className="font-medium mb-2">{s.title}</h3>

            {/* Text */}
            <p className="text-sm text-gray-400">
              High-quality {s.title.toLowerCase()} solutions for creators.
            </p>

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
          </motion.div>
        );
      })}
    </div>
  </div>
</section>








      
    </div>
  )
}

export default Services
