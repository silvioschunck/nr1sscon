import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://sscon.com.br/imagens/logosscon.png"
            alt="SSCON Consultoria"
            className="h-10 md:h-12 w-auto"
          />
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sobre NR-1
          </a>
          <a href="#solucao" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Nossa Solução
          </a>
          <a href="#diagnostico" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Diagnóstico
          </a>
        </motion.nav>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="https://sscon.com.br/links/site"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm px-4 py-2"
        >
          Agendar Agora
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
