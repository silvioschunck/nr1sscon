import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a NR-1 e quais são as novas exigências?",
    answer:
      "A NR-1 é a Norma Regulamentadora que estabelece disposições gerais sobre segurança e saúde no trabalho. A atualização de 2024 incluiu a obrigatoriedade de identificar e gerenciar riscos psicossociais no Programa de Gerenciamento de Riscos (PGR), como estresse, assédio, sobrecarga de trabalho e fatores organizacionais que afetam a saúde mental dos colaboradores.",
  },
  {
    question: "Quando minha empresa precisa estar em conformidade?",
    answer:
      "O prazo para adequação é até 26 de maio de 2026. A partir dessa data, todas as empresas com funcionários CLT estarão sujeitas a fiscalizações do Ministério do Trabalho e Emprego (MTE), podendo receber multas e penalidades em caso de não conformidade.",
  },
  {
    question: "Quais empresas são obrigadas a cumprir a NR-1?",
    answer:
      "Todas as empresas brasileiras que possuem funcionários regidos pela CLT são obrigadas a cumprir a NR-1, independentemente do porte ou segmento de atuação. Isso inclui microempresas, pequenas, médias e grandes empresas.",
  },
  {
    question: "Quais são as penalidades por não conformidade?",
    answer:
      "As penalidades incluem multas por funcionário exposto ao risco, que podem variar de acordo com a gravidade e reincidência. Além disso, a empresa pode sofrer ações trabalhistas, danos à reputação, aumento de afastamentos e queda na produtividade.",
  },
  {
    question: "O que é o Diagnóstico de Riscos Psicossociais (DRPS)?",
    answer:
      "O DRPS é uma metodologia própria da SSCON que mapeia e quantifica os riscos psicossociais presentes na organização. Através de questionários validados, entrevistas e análise documental, geramos um relatório executivo com KPIs, nível de risco e plano de ação personalizado.",
  },
  {
    question: "Como funciona o diagnóstico gratuito oferecido pela SSCON?",
    answer:
      "O diagnóstico preliminar gratuito é uma reunião consultiva onde avaliamos o cenário atual da sua empresa em relação à NR-1. Identificamos o nível de risco (Alto, Médio ou Baixo) e apresentamos as principais ações necessárias para adequação, sem compromisso.",
  },
  {
    question: "Quanto tempo leva para implementar a conformidade completa?",
    answer:
      "O tempo varia de acordo com o porte e complexidade da empresa. Em média, o processo completo de diagnóstico, implementação e validação leva de 3 a 6 meses. Por isso, é fundamental iniciar o quanto antes para garantir a conformidade até o prazo legal.",
  },
  {
    question: "A SSCON atende empresas de quais regiões?",
    answer:
      "Atendemos empresas em todo o Brasil e no Mercosul. Nossa consultoria pode ser realizada de forma presencial ou remota, adaptando-se às necessidades e localização de cada cliente.",
  },
];

const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-secondary/30"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tire Suas Dúvidas sobre a NR-1
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reunimos as perguntas mais comuns sobre a nova exigência de riscos
            psicossociais e o processo de adequação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
