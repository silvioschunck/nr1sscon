import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, CalendarCheck, ArrowRight } from "lucide-react";

const AGENDAMENTO_LINK = "https://sscon.com.br/links/agendanr1";

const AgendamentoVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setHasInteracted(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Destaque na Mídia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Assista à Matéria do SP1 — TV Globo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As alterações na NR-1 foram destaque no <strong className="text-foreground">SP1 da TV Globo</strong>. Assista à reportagem e entenda o impacto das novas exigências para as empresas.
            Depois, <strong className="text-foreground">agende uma conversa com nosso especialista</strong> e proteja sua empresa antes do prazo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video bg-foreground/5">
              {isVisible && (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect fill='%231a365d' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Inter, sans-serif' font-size='48'%3EMatéria SP1 - TV Globo%3C/text%3E%3C/svg%3E"
                  playsInline
                  controls
                  autoPlay
                  muted
                  preload="auto"
                >
                  <source src="https://sscon.com.br/academia-sscon/sptv1.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              )}

              {!hasInteracted && isVisible && (
                <div
                  onClick={handleUnmute}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-foreground/40 hover:bg-foreground/50 transition-colors z-10"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg btn-urgency-pulse">
                      <VolumeX className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                    <span className="text-white text-lg md:text-xl font-bold bg-foreground/60 px-4 py-2 rounded-lg">
                      🔊 Clique Aqui para Ativar o Som
                    </span>
                  </motion.div>
                </div>
              )}

              {hasInteracted && (
                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/70 hover:bg-foreground/90 flex items-center justify-center transition-colors"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 md:p-6 bg-primary rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <CalendarCheck className="w-5 h-5 opacity-80" />
                <span className="text-sm md:text-base font-medium">
                  Fale com um especialista e proteja sua empresa
                </span>
              </div>
              <a
                href={AGENDAMENTO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-video group"
              >
                Agendar com Especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendamentoVideoSection;
