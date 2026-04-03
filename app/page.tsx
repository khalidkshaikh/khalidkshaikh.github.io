import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectsShowcase from "@/components/ui/project-showcase";
import ProductGrid from "@/components/ProductGrid";
import AIPulseShowcase from "@/components/AIPulseShowcase";
import BlogStrip from "@/components/BlogStrip";
import ERPTeaser from "@/components/ERPTeaser";
import Footer from "@/components/Footer";
import ADLCSection from "@/components/ADLCSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <WhatIBuild />
        <ProjectsShowcase />
        <ProductGrid />
        <AIPulseShowcase />
        <ADLCSection />
        <BlogStrip />
        <ERPTeaser />
      </main>
      <Footer />
    </>
  );
}
