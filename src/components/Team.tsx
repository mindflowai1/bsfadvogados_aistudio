import { motion } from 'motion/react';

const team = [
  {
    name: "Dr. Daniel Borges",
    role: "Sócio Fundador",
    description: "Com mais de uma década de experiência jurídica, lidera nossa equipe com visão estratégica e foco em resultados concretos.",
    image: "/imagens adv/daniel borges.jpeg"
  },
  {
    name: "Aline Moreira",
    role: "Assessora Jurídica",
    description: "Especialista focada no atendimento humanizado e na compreensão profunda do cenário de cada cliente.",
    image: "/imagens adv/aline moreira.jpg"
  },
  {
    name: "Gustavo Lima",
    role: "Assessor Jurídico",
    description: "Atuação técnica exemplar com análise meticulosa, focada em construir a melhor defesa e estratégia.",
    image: "/imagens adv/gustavo lima.jpeg"
  }
];

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-[#fbfaf7] relative border-t border-brand-gold/20">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-4">Nossa Equipe</span>
          <h2 className="text-3xl md:text-5xl font-serif text-zinc-950 mb-6">
            Líderes em <span className="italic text-brand-gold">defesa de direitos</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-zinc-700 text-lg font-light">
            Profissionais altamente capacitados, dedicados à proteção dos seus interesses com agilidade e técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white group border border-brand-gold/15 hover:border-brand-gold hover:shadow-[0_15px_40px_rgba(197,160,89,0.08)] transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="h-[350px] overflow-hidden relative bg-zinc-50">
                <div className="absolute inset-0 border border-brand-gold/10 m-3 z-10 pointer-events-none transition-colors duration-500 group-hover:border-brand-gold/30"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 border-t border-brand-gold/15 bg-white flex-1">
                <h3 className="text-2xl font-serif text-zinc-950 mb-2">{member.name}</h3>
                <p className="text-brand-gold text-[10px] tracking-widest uppercase mb-4 opacity-90 font-semibold">{member.role}</p>
                <p className="text-zinc-700 leading-relaxed text-sm font-light">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
