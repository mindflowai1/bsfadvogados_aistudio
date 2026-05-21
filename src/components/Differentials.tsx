import { motion } from 'motion/react';
import { Scale, HeartHandshake, Eye } from 'lucide-react';

const differentials = [
  {
    number: "01",
    icon: Scale,
    title: "Anos de Experiência",
    highlight: "Mais de uma década",
    description: "Liderados pelo Dr. Daniel Borges, acumulamos mais de uma década de atuação estratégica com resultados comprovados em todo o Brasil.",
    accent: "Fundado em 2013"
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    highlight: "Você em primeiro lugar",
    description: "Cada cliente é único. Ouvimos sua história com empatia e respeito à sua realidade, construindo soluções sob medida para o seu caso.",
    accent: "Foco no cliente"
  },
  {
    number: "03",
    icon: Eye,
    title: "Comunicação Clara",
    highlight: "Sem juridiquês",
    description: "Você acompanha cada etapa do seu processo de forma informada e segura — sem termos técnicos desnecessários, com total transparência.",
    accent: "100% transparente"
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-28 bg-[#fbfaf7] relative border-t border-brand-gold/20 overflow-hidden">
      {/* Subtle background texture decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-4">Nossa Filosofia</span>
          <h2 className="text-3xl md:text-5xl mb-6 text-zinc-950 font-serif leading-tight">
            Excelência Jurídica com <span className="italic text-brand-gold">Experiência</span>, Humanidade e Transparência
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative bg-[#080809] border border-white/[0.06] hover:border-brand-gold/40 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_80px_rgba(197,160,89,0.15)] hover:-translate-y-1"
            >
              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Large Background Number */}
              <span className="absolute top-4 right-5 font-serif text-[80px] leading-none text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none font-bold">
                {item.number}
              </span>

              <div className="p-8 pt-10 relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="relative w-14 h-14">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border border-brand-gold/25 group-hover:border-brand-gold/60 transition-colors duration-500 rotate-45"></div>
                    {/* Inner fill */}
                    <div className="absolute inset-[6px] bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-500 rotate-45"></div>
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-gold opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Number badge */}
                <span className="text-[9px] uppercase tracking-widest text-brand-gold/60 font-semibold mb-3 block">
                  {item.accent}
                </span>

                {/* Title */}
                <h3 className="text-xl mb-2 text-white font-serif tracking-wide group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Highlight line */}
                <p className="text-brand-gold text-xs font-semibold tracking-wide uppercase mb-4 opacity-80">
                  {item.highlight}
                </p>

                {/* Divider */}
                <div className="w-8 h-[1px] bg-brand-gold/30 mb-5 group-hover:w-16 group-hover:bg-brand-gold/60 transition-all duration-500"></div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed font-light flex-1">
                  {item.description}
                </p>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-5 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-zinc-600 text-[10px] uppercase tracking-widest">BFS Advogados</span>
                  <div className="w-6 h-[1px] bg-brand-gold/40 group-hover:w-10 group-hover:bg-brand-gold transition-all duration-500"></div>
                </div>
              </div>

              {/* Subtle bottom corner glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
