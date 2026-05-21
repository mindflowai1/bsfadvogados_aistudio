import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const locations = [
  {
    id: 'bh',
    title: 'Sede Belo Horizonte',
    shortTitle: 'Sede BH',
    addressLines: (
      <>
        Rua Pernambuco, 189,<br />
        Funcionários,<br />
        Belo Horizonte/MG
      </>
    ),
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.050302302196!2d-43.93510522409748!3d-19.932973781449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699de23fb77a7%3A0xcb13e9a4f494511d!2sR.%20Pernambuco%2C%20189%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-150%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1714072348554!5m2!1spt-BR!2sus',
  },
  {
    id: 'vespasiano',
    title: 'Unidade Vespasiano',
    shortTitle: 'Vespasiano',
    addressLines: (
      <>
        Rua Yuri Gagarin, 662,<br />
        Gávea,<br />
        Vespasiano/MG
      </>
    ),
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2435767223293!2d-43.9167909240409!3d-20.040183181373536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6852bb3c3b063%3A0x86c67ef65e4ff889!2sR.%20Yuri%20Gagarin%2C%20662%20-%20G%C3%A1vea%2C%20Vespasiano%20-%20MG%2C%2033206-250!5e0!3m2!1spt-BR!2sbr!4v1716298000000!5m2!1spt-BR!2sbr',
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <footer id="contato" className="bg-brand-navy pt-24 pb-8 border-t border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 mb-20"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Info Section (Left) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-3">Contato</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
                Agende sua <br />
                <span className="italic text-brand-gold">consultoria</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                Estamos prontos para ouvir sua história e construir a melhor estratégia diplomática ou contenciosa para o seu caso.
              </p>
            </div>

            {/* Luxurious Contact Info Block */}
            <div className="space-y-6 pt-8 border-t border-brand-gold/10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5">Telefone</span>
                  <span className="text-white text-sm font-light tracking-wide">(31) 98591-1342</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5">E-mail</span>
                  <span className="text-white text-sm font-light tracking-wide break-all">assessoriajuridica@bfsadvogados.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5">Atendimento</span>
                  <span className="text-white text-sm font-light tracking-wide">Segunda a Sexta — 09h às 18h</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/bfs.advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-450 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584786813670&locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-450 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bfs-advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-450 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Location Portal Section (Right) */}
          <div className="lg:col-span-7 space-y-6 w-full">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-3">Selecione a Unidade</span>
              {/* Elegant Minimal Editorial Tabs Switcher */}
              <div className="flex border-b border-white/10 pb-0 gap-8">
                {locations.map((loc) => {
                  const isActive = activeLoc.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLoc(loc)}
                      className={`text-left pb-3 font-serif text-base md:text-lg tracking-wide transition-all duration-300 relative cursor-pointer ${
                        isActive ? 'text-brand-gold font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {loc.title}
                      {isActive && (
                        <motion.div
                          layoutId="activeFooterLocationTabLine"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-gold rounded-t-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map Frame Container with Floating Glass Card */}
            <div className="h-[420px] w-full border border-brand-gold/25 bg-prestige p-1.5 relative rounded-sm overflow-hidden group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLoc.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <iframe
                    src={activeLoc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localização ${activeLoc.title}`}
                    className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
                  ></iframe>
                </motion.div>
              </AnimatePresence>

              {/* Exquisite Floating Glass Address Card */}
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[320px] bg-[#050505]/90 backdrop-blur-md border border-brand-gold/20 p-5 rounded-sm shadow-2xl z-10">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold block mb-1">Endereço</span>
                    <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-2">
                      {activeLoc.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-400 font-light">
                      {activeLoc.addressLines}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-40">© {currentYear} BFS ADVOGADOS.</p>
          <div className="flex gap-8">
            <p className="text-[10px] uppercase tracking-widest opacity-40">CNPJ: 65.467.004/0001-20</p>
            <p className="text-[10px] uppercase tracking-widest opacity-40">Direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
