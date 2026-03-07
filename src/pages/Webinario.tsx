import { motion } from "framer-motion";
import { AlertTriangle, Calendar } from "lucide-react";
import CountdownTimer from "@/components/landing/CountdownTimer";

const Webinario = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative flex items-center justify-center hero-gradient overflow-hidden pt-20 pb-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="urgency-banner px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-lg md:text-xl font-semibold animate-urgency-pulse">
              <AlertTriangle className="w-5 h-5" />
              <span>A partir de Maio de 2026 todas empresas precisam se adequar às atualizações da NR-1</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prazo para sua empresa
              <span className="block text-white/90">ser multada</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Fiscalizações e penalidades da NR-1 estão próximas.
              <span className="font-semibold text-white"> O tempo para adequação está acabando. Fique tranquilo, nós vamos te ajudar!</span>
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-center text-white/70 text-sm mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Tempo restante até 26 de Maio de 2026
            </p>
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* Embedded Registration */}
      <section className="w-full">
        <iframe
          src="https://sscon.com.br/webinario/cadastro.html"
          className="w-full border-0"
          style={{ minHeight: '100vh' }}
          title="Cadastro Webinário"
        />
      </section>
    </div>
  );
};

export default Webinario;
