import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import AIPulseShowcase from "@/components/AIPulseShowcase";
import ProductGrid from "@/components/ProductGrid";
import WhatIBuild from "@/components/WhatIBuild";
import BlogStrip from "@/components/BlogStrip";
import ERPTeaser from "@/components/ERPTeaser";
import Footer from "@/components/Footer";

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
        <BlogStrip />
        <ERPTeaser />
      </main>
      <Footer />
    </>
  );
}
