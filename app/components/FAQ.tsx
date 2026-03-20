"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this traditional artist management?",
    a: "No. This is a structured digital growth system focused on building your online presence, audience, and monetization — not traditional talent management.",
  },
  {
    q: "Do you guarantee viral growth?",
    a: "We don’t promise virality. Instead, we build systems that improve discoverability, consistency, and long-term growth.",
  },
  {
    q: "Who creates the content?",
    a: "You remain the creator. We guide strategy, optimization, and positioning while you focus on content creation.",
  },
  {
    q: "How long does onboarding take?",
    a: "Onboarding typically takes 7–14 days depending on the scope and platforms involved.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term lock-ins. You retain full flexibility and ownership.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 max-w-5xl mx-auto px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold">
          Frequently Asked <br />
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Everything you need to know about the Artist Growth Management program.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = active === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-lg">
                  {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-orange-400" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>

              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}