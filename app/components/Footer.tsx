"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-white/10">
      
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-pink-500/5 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="" className="w-45" />
            <p className="text-gray-400 mt-3 text-sm">
              AI-powered growth systems for modern artists & creators.
              Build your brand. Grow your audience. Monetize your content.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase text-gray-400 mb-3">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              {["Overview", "Services", "Plans", "Testimonials", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-orange-400 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase text-gray-400 mb-3">
              Contact
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={14} /> hello@zephiredigital.com
              </span>

              <span>🌐 zephiredigital.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {[Instagram, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
                >
                  <Icon size={16} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          
          <span>© 2026 Zephire Digital. All rights reserved.</span>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-orange-400 cursor-pointer">Privacy</span>
            <span className="hover:text-orange-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}