import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Calendar, Scale, Shield } from "lucide-react";

const cards = [
  {
    icon: AlertCircle,
    title: "O que mudou na NR-1",
    description:
      "A nova NR-1 exige que todas as empresas identifiquem e gerenciem riscos psicossociais no ambiente de trabalho.",
    details: [
      "Estresse ocupacional",
      "Pressão por metas",
      "Assédio moral e sexual",
      "Fatores organizacionais",
    ],
    accent: "primary",
  },
  {
    icon: Calendar,
    title: "Prazo e Fiscalização",
    description:
      "O prazo para adequação está definido e as fiscalizações começarão imediatamente após.",
    details: [
      "Prazo: 26 de maio de 2026",
      "Fiscalização pelo MTE",
      "Auditorias surpresa",
      "Denúncias trabalhistas",
    ],
    accent: "urgency",
  },
  {
    icon: Scale,
    title: "Implicações Legais e Financeiras",
    description:
      "A não conformidade pode resultar em consequências severas para sua empresa.",
    details: [
      "Multas por funcionário",
      "Processos trabalhistas",
      "Danos à reputação",
      "Perda de produtividade",
    ],
    accent: "urgency",
  },
  {
    icon: Shield,
    title: "Nossa Solução SSCON",
    description:
      "Metodologia completa para adequação e proteção jurídica da sua empresa.",
    details: [
      "Metodologia DRPS exclusiva",
      "Relatório executivo com KPIs",
      "Treinamento de lideranças",
      "Monitoramento contínuo",
    ],
    accent: "primary",
  },
];

const NR1Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Informações Essenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa saber sobre a NR-1
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entenda as mudanças, prazos, riscos e como a SSCON pode proteger sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-corporate group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`icon-container shrink-0 ${
                    card.accent === "urgency"
                      ? "bg-urgency/10 text-urgency"
                      : ""
                  }`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-2">
                    {card.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            card.accent === "urgency"
                              ? "bg-urgency"
                              : "bg-primary"
                          }`}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NR1Cards;
