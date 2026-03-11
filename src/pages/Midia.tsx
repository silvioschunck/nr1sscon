import MidiaHeader from "@/components/midia/MidiaHeader";
import MidiaHeroSection from "@/components/midia/MidiaHeroSection";
import MidiaVideoSection from "@/components/midia/MidiaVideoSection";
import NR1Cards from "@/components/landing/NR1Cards";
import MidiaDiagnosticSection from "@/components/midia/MidiaDiagnosticSection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import MidiaExitIntentModal from "@/components/midia/MidiaExitIntentModal";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import MidiaFooter from "@/components/midia/MidiaFooter";

const Midia = () => {
  return (
    <div className="min-h-screen bg-background">
      <MidiaHeader />
      <main>
        <MidiaHeroSection />
        <MidiaVideoSection />
        <NR1Cards />
        <TrustSection />
        <FAQSection />
        <MidiaDiagnosticSection />
      </main>
      <MidiaFooter />
      <MidiaExitIntentModal />
      <WhatsAppButton />
    </div>
  );
};

export default Midia;
