import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Shield, ArrowRight } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
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
            Entenda a Urgência
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua Empresa Está Preparada?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra o que muda com a nova NR-1 e como proteger sua organização
            das penalidades que se aproximam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-foreground/5">
            {isVisible && (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect fill='%231a365d' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Inter, sans-serif' font-size='48'%3ESSCON Consultoria%3C/text%3E%3C/svg%3E"
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="https://sscon.com.br/imagens/video1.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-110"
                  aria-label="Reproduzir vídeo"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" />
                </button>
              </div>
            )}
          </div>

          {/* CTA Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-foreground/90 to-transparent">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-white">
                <Shield className="w-5 h-5 text-white/80" />
                <span className="text-sm md:text-base font-medium">
                  Proteja sua empresa antes do prazo
                </span>
              </div>
              <a
                href="https://sscon.com.br/links/site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-urgency text-sm px-5 py-2.5 flex items-center gap-2 whitespace-nowrap"
              >
                Agendar Diagnóstico Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
