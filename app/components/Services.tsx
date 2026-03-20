"use client";

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
  {
    title: "Branding & Profile Optimization",
    icon: Brush,
    items: [
      "YouTube channel optimization",
      "Instagram profile optimization",
      "Facebook page optimization",
      "Platform naming consistency",
      "Brand identity alignment",
      "Electronic Press Kit (EPK)",
    ],
  },
  {
    title: "Thumbnail & Cover Design",
    icon: ImgIcon,
    items: [
      "YouTube thumbnails",
      "Channel banners",
      "Social media covers",
      "Highlight icons",
      "Promotional graphics",
    ],
  },
  {
    title: "Social Media Management",
    icon: Share2,
    items: [
      "Scheduled posting",
      "Caption optimization",
      "Platform organization",
      "Cross-platform publishing",
    ],
  },
  {
    title: "Content Strategy",
    icon: Layout,
    items: [
      "Monthly content roadmap",
      "Publishing strategy",
      "Topic planning",
      "Audience positioning",
    ],
  },
  {
    title: "Artist / Creator Website",
    icon: Globe,
    items: [
      "Portfolio website",
      "Content embeds",
      "Contact forms",
      "Platform hub",
    ],
  },
  {
    title: "Growth Optimization",
    icon: TrendingUp,
    items: [
      "Keyword optimization",
      "Hashtag strategy",
      "Channel improvements",
      "Discoverability optimization",
    ],
  },
  {
    title: "Monetization Setup",
    icon: DollarSign,
    items: [
      "YouTube monetization",
      "Facebook monetization",
      "Instagram readiness",
    ],
  },
  {
    title: "Performance Tracking",
    icon: BarChart,
    items: [
      "Monthly reports",
      "Analytics insights",
      "Strategic recommendations",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-6"
        >
          Core <span className="text-orange-400">Digital Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          A complete system designed to build, manage, optimize, and scale 
          your digital presence as an artist or creator.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                hover:bg-white/10 hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500/20 to-pink-500/20 mb-4">
                  <Icon className="text-orange-400 w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-medium mb-3">{service.title}</h3>

                {/* Items */}
                <ul className="text-xs text-gray-400 space-y-1">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                  {service.items.length > 3 && (
                    <li className="text-orange-400">+ more</li>
                  )}
                </ul>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl transition" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}