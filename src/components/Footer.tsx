import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-brand-navy pt-20 pb-8 border-t border-border-gold">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Contato</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Agende sua <span className="italic text-brand-gold">consultoria</span>
              </h2>
              <p className="opacity-60 text-lg font-light">
                Estamos prontos para ouvir sua história e construir a melhor estratégia diplomática ou contenciosa para o seu caso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-border-gold pt-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 opacity-80" />
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-2">Sede BH</h4>
                    <p className="text-sm leading-relaxed opacity-60 font-light">
                      Rua Pernambuco, 189,<br />
                      Funcionários,<br />
                      Belo Horizonte/MG
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 opacity-80" />
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-2">Unidade Vespasiano</h4>
                    <p className="text-sm leading-relaxed opacity-60 font-light">
                      Rua Yuri Gagarin, 662,<br />
                      Gávea,<br />
                      Vespasiano/MG
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-border-gold">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 opacity-80" />
                <span className="text-white font-light text-sm tracking-wide">(31) 98591-1342</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 opacity-80" />
                <span className="text-white font-light text-sm tracking-wide break-all">assessoriajuridica@bfsadvogados.com.br</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 opacity-80" />
                <span className="text-white font-light text-sm tracking-wide">Segunda a Sexta — 09h às 18h</span>
              </div>
            </div>
          </div>

          {/* Map Section (Using an interactive iframe) */}
          <div className="h-[400px] w-full border border-border-gold bg-prestige p-2">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.050302302196!2d-43.93510522409748!3d-19.932973781449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699de23fb77a7%3A0xcb13e9a4f494511d!2sR.%20Pernambuco%2C%20189%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-150%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1714072348554!5m2!1spt-BR!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sede BH"
                className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
             ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="pt-8 border-t border-border-gold flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-40">© {currentYear} BFS ADVOGADOS.</p>
          <div className="flex gap-8">
            <p className="text-[10px] uppercase tracking-widest opacity-40">CNPJ: 45.456.918/0001-90</p>
            <p className="text-[10px] uppercase tracking-widest opacity-40">Direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
