import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VideoSection from "@/components/landing/VideoSection";
import NR1Cards from "@/components/landing/NR1Cards";
import DiagnosticSection from "@/components/landing/DiagnosticSection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import ExitIntentModal from "@/components/landing/ExitIntentModal";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <NR1Cards />
        <TrustSection />
        <FAQSection />
        <DiagnosticSection />
      </main>
      <Footer />
      <ExitIntentModal />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
