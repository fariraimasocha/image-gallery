import Feature from "@/components/Features/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Linkgenie from "@/components/Linkgenie/Linkgenie";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Linkgenie />
      <Footer />
    </>
  );
}
