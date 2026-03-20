
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


const Audit = () => {
  return (
<section className="py-28 max-

    <div>w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
  
  {/* LEFT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <p className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-5">
      Free Audit
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
      Get Your Free <br />
      <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Creator Growth Audit
      </span>
    </h2>

    <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
      We analyze your platforms, identify growth gaps, and provide a clear roadmap 
      to improve visibility, branding, and monetization opportunities.
    </p>

    {/* Bullet Points */}
    <div className="space-y-4">
      {[
        "YouTube channel structure",
        "Instagram profile positioning",
        "Content consistency",
        "Monetization readiness",
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-gray-300"
        >
          <CheckCircle className="text-orange-400 w-5 h-5" />
          <span>{item}</span>
        </motion.div>
      ))}
    </div>

    {/* Trust */}
    <div className="mt-8 flex gap-4 flex-wrap text-xs text-gray-500">
      <span className="bg-white/5 px-3 py-1 rounded-full">No monthly fees</span>
      <span className="bg-white/5 px-3 py-1 rounded-full">Cancel anytime</span>
      <span className="bg-white/5 px-3 py-1 rounded-full">100% ownership</span>
    </div>

    <p className="mt-6 text-xs text-orange-400">
      ⚡ Limited audit slots available each month
    </p>
  </motion.div>

  {/* FORM */}
  <motion.form
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
  >
    {/* Glow */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-[80px]" />

    <div className="relative space-y-5">
      
      {["Name", "Email", "Creator Type", "Primary Platform", "Profile Link"].map((f) => (
        <input
          key={f}
          placeholder={f}
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 
          focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
        />
      ))}

      <textarea
        placeholder="Tell us about your goals..."
        rows={3}
        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 
        focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
      />

      {/* CTA */}
      <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 py-3 rounded-lg font-medium 
      hover:scale-[1.02] hover:shadow-lg transition duration-200">
        Request Free Audit
      </button>

      {/* Privacy */}
      <p className="text-xs text-gray-500 text-center">
        Your information is private and used only for audit review.
      </p>
    </div>
  </motion.form>
</section>
 
  )
}

export default Audit
