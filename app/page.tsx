import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import AIPulseShowcase from "@/components/AIPulseShowcase";
import ProductGrid from "@/components/ProductGrid";
import WhatIBuild from "@/components/WhatIBuild";
import BlogStrip from "@/components/BlogStrip";
import ERPTeaser from "@/components/ERPTeaser";
import Footer from "@/components/Footer";
import ADLCSection from "@/components/ADLCSection";
import ProjectsShowcase from "@/components/ui/project-showcase";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <AIPulseShowcase />
        <ProductGrid />
        <WhatIBuild />
        <ProjectsShowcase />
        <ADLCSection />
        <BlogStrip />
        <ERPTeaser />
      </main>
      <Footer />
    </>
  );
}
