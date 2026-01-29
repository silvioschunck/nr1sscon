import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Shield, ArrowRight } from "lucide-react";

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShown &&
        !sessionStorage.getItem("exitModalShown")
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitModalShown", "true");
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 pointer-events-auto relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Urgency Badge */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-urgency/15 flex items-center justify-center animate-urgency-pulse">
                  <AlertTriangle className="w-8 h-8 text-urgency" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Espere! Sua empresa pode ser multada em breve
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Não deixe sua empresa exposta às penalidades da NR-1. Agende agora
                  um diagnóstico gratuito e descubra o nível de risco da sua organização.
                </p>

                {/* CTA */}
                <a
                  href="https://sscon.com.br/links/site"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                  className="btn-urgency w-full justify-center flex items-center gap-3 mb-4"
                >
                  <Shield className="w-5 h-5" />
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  onClick={closeModal}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Não, obrigado. Prefiro correr o risco.
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-urgency/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
