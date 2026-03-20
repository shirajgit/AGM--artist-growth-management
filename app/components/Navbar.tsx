"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Overview", "Services", "Plans", "Method", "Testimonials", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Overview");
  const [open, setOpen] = useState(false);

  // Scroll effect + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      links.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="   relative group cursor-pointer">
           <img src="/logo.png"  alt="" className="w-32 p-2" />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition ${
                  active === item ? "text-white" : "hover:text-white"
                }`}
              >
                {item}

                {/* Active underline */}
                {active === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-orange-500 to-pink-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#book">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 rounded-lg text-sm font-medium hover:scale-105 transition">
              Book Call
            </button></a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[80%] bg-black border-l border-white/10 z-50 p-6 flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="text-right text-2xl mb-8"
              >
                ✕
              </button>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg">
                {links.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={`${
                      active === item ? "text-orange-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-auto bg-gradient-to-r from-orange-500 to-pink-500 py-3 rounded-lg font-medium">
                Book Call
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}