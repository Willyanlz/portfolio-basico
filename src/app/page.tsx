import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-wrap">
        <Header />

        <div className="row row-1">
          <Services />
          <About />
        </div>

        <div className="row row-2">
          <SocialLinks />
          <Skills />
        </div>

        <div className="row row-3">
          <Contact />
        </div>

        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}