import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CalendarCheck, ArrowRight } from "lucide-react";

const AGENDAMENTO_LINK = "https://sscon.com.br/links/agendanr1";

const AgendamentoExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShown &&
        !sessionStorage.getItem("exitModalShownAgendamento")
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShownAgendamento", "true");
      }
    },
    [hasShown]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 pointer-events-auto relative overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-urgency/15 flex items-center justify-center animate-urgency-pulse">
                  <AlertTriangle className="w-8 h-8 text-urgency" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Antes de sair, fale com um especialista
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Agende agora uma <strong className="text-foreground">conversa gratuita com um especialista</strong> e descubra como proteger sua empresa com a nova NR-1 — sem compromisso.
                </p>

                <a
                  href={AGENDAMENTO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                  className="btn-cta-modern w-full justify-center group mb-4"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Agendar com Especialista
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={closeModal}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Não, obrigado. Prefiro correr o risco.
                </button>
              </div>

              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-urgency/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AgendamentoExitIntentModal;
