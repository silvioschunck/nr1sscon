import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Shield, Clock, AlertTriangle, CalendarCheck } from "lucide-react";

const AGENDAMENTO_LINK = "https://sscon.com.br/links/agendanr1";

const benefits = [
  "Avaliação personalizada do cenário da sua empresa",
  "Identificação de gaps de conformidade com a NR-1",
  "Orientação sobre os próximos passos prioritários",
  "Análise da exposição jurídica atual",
  "Sem compromisso - agendamento gratuito",
];

const AgendamentoDiagnosticSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diagnostico" className="py-16 md:py-24 section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-urgency/10 text-urgency text-sm font-semibold rounded-full mb-4">
                Oferta Exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Agende uma conversa com
                <span className="text-primary"> nosso Especialista</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Fale diretamente com um especialista da SSCON e receba uma
                <strong className="text-foreground"> orientação personalizada</strong> sobre como adequar sua empresa à nova NR-1.
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Sem compromisso e totalmente gratuito.</strong> Descubra se sua empresa está
                exposta a multas e o que fazer para se proteger antes do prazo.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                href={AGENDAMENTO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-modern group inline-flex"
              >
                <CalendarCheck className="w-5 h-5" />
                Agendar com Especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="card-corporate border-l-4 border-l-urgency">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-urgency/15 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-urgency" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Risco Alto</h4>
                    <p className="text-sm text-muted-foreground">
                      Ação imediata necessária - exposição crítica a multas
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-corporate border-l-4 border-l-[hsl(var(--warning,45_93%_47%))]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(45_93%_47%/0.15)] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[hsl(45_93%_47%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Risco Médio</h4>
                    <p className="text-sm text-muted-foreground">
                      Ajustes recomendados para garantir conformidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-corporate border-l-4 border-l-primary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Risco Baixo</h4>
                    <p className="text-sm text-muted-foreground">
                      O que fazer para manter sua empresa dentro dos padrões
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground/80 text-center">
                  <strong>É simples:</strong> Agende uma conversa → Receba orientação personalizada → Proteja sua empresa antes do prazo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendamentoDiagnosticSection;
