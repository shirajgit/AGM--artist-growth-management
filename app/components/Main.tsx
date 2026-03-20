"use client";

import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
 
import Audit from "./Audit";
import Services from "./Services";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Hero3D from "./Hero3D";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import Affiliations from "./Affiliations";
import CreatorEconomy from "./CreatorEconomy";
import GrowthEcosystem from "./GrowthEcosystem";
import ProgramStructure from "./ProgramStructure";

export default function LandingPage() {
  return (
    <div className="font-sans bg-black text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="overview">
        <Hero />
      </section>
      
 
      {/* ================= AUDIT ================= */}
      <section className="py-24 max-w-7xl mx-auto   gap-16 px-6 items-center">
        
       <Audit></Audit> 
      </section>


      <Affiliations></Affiliations>
      <CreatorEconomy></CreatorEconomy>
      <GrowthEcosystem></GrowthEcosystem>
      <ProgramStructure></ProgramStructure>

      {/* ================= SERVICES ================= */}
      <Services></Services>

      {/* ================= PRICING ================= */}
       <Pricing></Pricing>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-24">
          
   <Testimonials></Testimonials>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
     
      <FAQ></FAQ>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center">
       <FinalCTA></FinalCTA>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer></Footer>
    </div>
  );
}









 