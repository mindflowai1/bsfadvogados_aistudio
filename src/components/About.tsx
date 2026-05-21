import { motion } from 'motion/react';
import { ShieldCheck, MessageCircle, MapPin, Users, Scale } from 'lucide-react';

export function About() {
  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma consulta com a BFS Advogados.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="sobre" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decoration lines mirroring the main theme */}
      <div className="absolute inset-0 border-t border-border-gold opacity-10"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10"
      >
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">A Banca</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Sobre o <span className="italic text-brand-gold">Escritório</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Asymmetric Elegant 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Premium Visual Typography Card */}
          <div className="lg:col-span-5 h-[380px] bg-prestige border border-border-gold p-8 relative flex flex-col justify-between overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Geometric abstract background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-gold/10 rotate-45 transition-transform duration-700 group-hover:rotate-90 pointer-events-none"></div>
            
            <div className="space-y-6">
              <span className="text-brand-gold text-[10px] tracking-widest uppercase font-semibold block">Especialidade e Foco</span>
              <div className="font-serif text-5xl text-white/10 font-bold tracking-tighter leading-none select-none">BFS</div>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-xs tracking-wider uppercase text-white/95 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                  Direito Trabalhista
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wider uppercase text-white/95 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                  Direito Empresarial
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wider uppercase text-white/95 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                  Direito Civil
                </li>
              </ul>
            </div>

            {/* Micro badges at the bottom */}
            <div className="border-t border-border-gold/20 pt-6 flex items-center justify-between text-[10px] tracking-widest text-brand-gold/70 uppercase font-medium">
              <span>Belo Horizonte</span>
              <span className="w-1 h-1 bg-border-gold rounded-full"></span>
              <span>Vespasiano</span>
            </div>
          </div>

          {/* Right Column: The Biography Content */}
          <div className="lg:col-span-7 space-y-6 text-white/80 font-light leading-relaxed text-base md:text-lg">
            <p>
              A <strong className="text-white font-medium">BFS Advogados</strong> é um escritório de advocacia localizado estrategicamente em <strong className="text-white font-medium">Belo Horizonte</strong>, no tradicional bairro Funcionários, e em <strong className="text-white font-medium">Vespasiano</strong>, com atuação focada e estratégica nas áreas de <span className="text-brand-gold font-medium italic">Direito Trabalhista, Empresarial e Civil</span>.
            </p>
            
            <p>
              Liderado pelo <strong className="text-white font-medium text-brand-gold">Dr. Daniel Borges (OAB/MG nº 174.698)</strong>, advogado com mais de 10 anos de sólida experiência jurídica nos tribunais e esferas preventivas, o escritório atua de forma estritamente personalizada, buscando soluções jurídicas seguras, eficientes e profundamente humanizadas para cada cliente.
            </p>
            
            <p className="text-white/60 text-sm md:text-base border-l-2 border-brand-gold/40 pl-6 py-1 italic font-serif">
              "Nosso foco absoluto é transformar problemas complexos em soluções práticas e humanizadas, priorizando a agilidade de resposta, a transparência cirúrgica e resultados concretos, inclusive por meio de negociações estratégicas e acordos extrajudiciais."
            </p>

            {/* Sleek CTA Button */}
            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black uppercase text-xs tracking-widest font-bold transition-all duration-300 rounded-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Entre em Contato com a Banca
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
