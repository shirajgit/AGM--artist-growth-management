"use client";
 
 
import Affiliations from "./components/Affiliations";
import Artists from "./components/Artists";
import Audit from "./components/Audit";
import Certifications from "./components/Certifications";
import CreatorEconomy from "./components/CreatorEconomy";
import FAQ from "./components/FAQ";
import FeaturedOn from "./components/FeaturedOn";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GrowthEcosystem from "./components/GrowthEcosystem";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OnboardingSteps from "./components/OnboardingSteps";
import Pricing from "./components/Pricing";
import ProgramStructure from "./components/ProgramStructure";
import ProgramWorkflow from "./components/ProgramWorkflow";
import RevenueShare from "./components/RevenueShare";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyZephireTable from "./components/WhyZephire";
import ZephireGrowthMethod from "./components/ZephireGrowthMethod";

export default function Home() {
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
      <Artists></Artists>
      <Features></Features> 
      {/* ================= PRICING ================= */}
       <Pricing></Pricing>

       <OnboardingSteps></OnboardingSteps>
       <RevenueShare></RevenueShare>
       <ZephireGrowthMethod></ZephireGrowthMethod>
       <FeaturedOn></FeaturedOn>
       <Certifications></Certifications>
       <WhyZephireTable></WhyZephireTable>
       <ProgramWorkflow></ProgramWorkflow>

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









 