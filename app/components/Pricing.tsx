 

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div>
<section id="plans" className="py-28">
  
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-semibold text-center mb-4"
  >
    Plans & <span className="text-orange-400">Pricing</span>
  </motion.h2>

  <p className="text-center text-gray-400 mb-12 text-sm">
    One-time onboarding fee. No monthly management charges.
  </p>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {[
      {
        name: "Starter",
        price: "₹30,000",
        features: [
          "Branding & Profile Optimization",
          "Content Strategy",
          "Basic Creative Assets",
          "Monetization Setup",
        ],
      },
      {
        name: "Growth",
        price: "₹49,000",
        highlight: true,
        features: [
          "Everything in Starter",
          "Advanced Content Strategy",
          "Growth Optimization",
          "Audience Strategy",
          "Distribution Support",
        ],
      },
      {
        name: "Empire",
        price: "₹79,000",
        features: [
          "Everything in Growth",
          "Advanced Creative Assets",
          "Artist Website",
          "Brand Collaboration Ready",
          "Priority Support",
        ],
      },
    ].map((p, i) => (
      <motion.div
        key={p.name}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className={`relative p-8 rounded-2xl border backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${
          p.highlight
            ? "border-orange-400 bg-white/10 scale-105"
            : "border-white/10 bg-white/5"
        }`}
      >
        {/* MOST POPULAR */}
        {p.highlight && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold">{p.name}</h3>

        {/* Price */}
        <p className="text-4xl font-bold my-4">{p.price}</p>

        {/* Features */}
        <ul className="text-sm text-gray-300 mb-6 space-y-3">
          {p.features.map((f, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-orange-400" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 py-3 rounded-lg font-medium hover:scale-[1.03] transition">
          Choose Plan
        </button>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transition" />
      </motion.div>
    ))}
  </div>

  {/* Bottom Trust */}
  <div className="text-center mt-10 text-sm text-gray-400">
    ✔ No monthly fees &nbsp; • &nbsp; ✔ Cancel anytime &nbsp; • &nbsp; ✔ Full ownership
  </div>
</section>



      
    </div>
  )
}

export default Pricing
