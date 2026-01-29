import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="https://sscon.com.br/imagens/logosscon.png"
              alt="SSCON Consultoria"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/60">
              © {currentYear} SSCON Consultoria & Treinamento Empresarial.
              <br className="md:hidden" /> Todos os direitos reservados.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="https://sscon.com.br/links/site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Agendar Diagnóstico
            </a>
            <p className="text-sm text-background/50 text-center md:text-right">
              30+ anos protegendo empresas brasileiras
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-background/10">
          <p className="text-xs text-center text-background/40">
            Este site é destinado a fornecer informações sobre a NR-1 e serviços de consultoria.
            As informações aqui contidas não constituem aconselhamento jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
