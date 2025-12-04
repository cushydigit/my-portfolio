import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import About from "@/components/about"; 
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Blog from "./blog/page";

export default function Home() {
   return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>

   ) 
}

