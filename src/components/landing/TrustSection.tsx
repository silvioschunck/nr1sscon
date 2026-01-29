import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, LineChart, ShieldCheck, XCircle, CheckCircle } from "lucide-react";

const phases = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Mapeamento completo dos riscos psicossociais e gaps de conformidade",
    step: "01",
  },
  {
    icon: Settings,
    title: "Implementação",
    description: "Aplicação da metodologia DRPS e documentação para o PGR",
    step: "02",
  },
  {
    icon: LineChart,
    title: "Monitoramento",
    description: "Acompanhamento contínuo com KPIs e relatórios executivos",
    step: "03",
  },
];

const comparisonData = [
  { item: "Mapeamento de riscos psicossociais", protected: true, exposed: false },
  { item: "Documentação em conformidade com MTE", protected: true, exposed: false },
  { item: "Proteção contra multas trabalhistas", protected: true, exposed: false },
  { item: "Risco de autuação por fiscalização", protected: false, exposed: true },
  { item: "Exposição a processos judiciais", protected: false, exposed: true },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucao" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {[
            { icon: ShieldCheck, text: "30+ anos de consultoria empresarial" },
            { icon: Settings, text: "Metodologia própria DRPS" },
            { icon: ShieldCheck, text: "Blindagem jurídica NR-1" },
          ].map((badge, index) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 px-5 py-3 bg-secondary rounded-full border border-border"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fases da Implementação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e comprovado para garantir a conformidade da sua empresa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-1 bg-gradient-to-r from-primary via-primary to-primary/50 rounded-full" />

            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                <div className="card-corporate text-center pb-8 pt-12">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-lg z-10">
                    {phase.step}
                  </div>
                  <div className="icon-container mx-auto mb-4">
                    <phase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Empresa Protegida vs Empresa Exposta
          </h3>

          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary">
              <div className="p-4 font-medium text-foreground">Critério</div>
              <div className="p-4 font-medium text-center text-primary border-l border-border">
                Protegida ✓
              </div>
              <div className="p-4 font-medium text-center text-urgency border-l border-border">
                Exposta ✗
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-background" : "bg-secondary/30"
                }`}
              >
                <div className="p-4 text-sm text-foreground/90">{row.item}</div>
                <div className="p-4 flex justify-center border-l border-border">
                  {row.protected ? (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  ) : (
                    <XCircle className="w-5 h-5 text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-4 flex justify-center border-l border-border">
                  {row.exposed ? (
                    <XCircle className="w-5 h-5 text-urgency" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-muted-foreground/30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
