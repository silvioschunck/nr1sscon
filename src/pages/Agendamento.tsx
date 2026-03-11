import MidiaHeader from "@/components/midia/MidiaHeader";
import AgendamentoHeroSection from "@/components/agendamento/AgendamentoHeroSection";
import AgendamentoVideoSection from "@/components/agendamento/AgendamentoVideoSection";
import NR1Cards from "@/components/landing/NR1Cards";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import AgendamentoDiagnosticSection from "@/components/agendamento/AgendamentoDiagnosticSection";
import AgendamentoExitIntentModal from "@/components/agendamento/AgendamentoExitIntentModal";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgendamentoFooter from "@/components/agendamento/AgendamentoFooter";

const Agendamento = () => {
  return (
    <div className="min-h-screen bg-background">
      <MidiaHeader />
      <main>
        <AgendamentoHeroSection />
        <AgendamentoVideoSection />
        <NR1Cards />
        <TrustSection />
        <FAQSection />
        <AgendamentoDiagnosticSection />
      </main>
      <AgendamentoFooter />
      <AgendamentoExitIntentModal />
      <WhatsAppButton />
    </div>
  );
};

export default Agendamento;
