import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Shield, Clock, AlertTriangle } from "lucide-react";

const benefits = [
  "Mapeamento do nível de risco: Alto, Médio ou Baixo",
  "Identificação de gaps de conformidade",
  "Análise da exposição jurídica atual",
  "Recomendações prioritárias de ação",
  "Sem compromisso - totalmente gratuito",
];

const DiagnosticSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diagnostico" className="py-16 md:py-24 section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-urgency/10 text-urgency text-sm font-semibold rounded-full mb-4">
                Oferta Exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Diagnóstico Preliminar
                <span className="text-primary"> Gratuito</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Em uma reunião de 30 minutos, nossos especialistas vão mapear o
                nível de risco da sua empresa e apresentar um panorama claro da
                sua exposição legal.
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
                href="https://sscon.com.br/links/site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-urgency inline-flex items-center gap-3 text-lg"
              >
                <Shield className="w-5 h-5" />
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Right Content - Risk Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Risk Level Cards */}
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
                      Empresa protegida - pequenos ajustes de documentação
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground/80 text-center">
                  <strong>Importante:</strong> Quanto antes iniciar, menor o custo de adequação e maior a segurança jurídica.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
