"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const Audit = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    creatorType: "",
    platform: "",
    link: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "https://job-backend-1-l1hq.onrender.com/book-consultant", // 🔥 replace this
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          creatorType: "",
          platform: "",
          link: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
      
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
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-[80px]" />

       <div className="relative">
  {/* Glow */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-[90px]" />

  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    {/* Name */}
    <input
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Name"
      className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200"
    />

    {/* Email */}
    <input
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Email"
      className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200"
    />

    {/* Creator Type */}
    <input
      name="creatorType"
      value={form.creatorType}
      onChange={handleChange}
      placeholder="Creator Type"
      className="col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200"
    />

    {/* Platform */}
    <input
      name="platform"
      value={form.platform}
      onChange={handleChange}
      placeholder="Primary Platform"
      className="col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200"
    />

    {/* Link */}
    <input
      name="link"
      value={form.link}
      onChange={handleChange}
      placeholder="Profile Link"
      className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200"
    />

    {/* Message */}
    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Tell us about your goals..."
      rows={3}
      className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-white placeholder-gray-400 backdrop-blur-md 
      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 
      transition-all duration-200 resize-none"
    />

    {/* Button */}
    <button
      type="submit"
      disabled={loading}
      className="col-span-2 mt-2 w-full bg-gradient-to-r from-orange-500 to-pink-500 
      py-3 rounded-xl font-medium shadow-lg 
      hover:scale-[1.02] hover:shadow-orange-500/30 
      active:scale-[0.98] transition-all duration-200"
    >
      {loading ? "Submitting..." : "🚀 Request Free Audit"}
    </button>

    {/* Status */}
    <div className="col-span-2">
      {status === "success" && (
        <p className="text-green-400 text-sm text-center mt-2">
          ✅ Request submitted successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center mt-2">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </div>

    {/* Privacy */}
    <p className="col-span-2 text-xs text-gray-500 text-center mt-2">
      Your information is private and used only for audit review.
    </p>
  </div>
</div>


      </motion.form>
    </section>
  );
};

export default Audit;