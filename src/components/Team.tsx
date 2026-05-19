import { motion } from 'motion/react';

const team = [
  {
    name: "Dr. Daniel Borges",
    role: "Sócio Fundador",
    description: "Com mais de uma década de experiência jurídica, lidera nossa equipe com visão estratégica e foco em resultados concretos.",
    image: "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/daniel%20borges.png"
  },
  {
    name: "Aline Moreira",
    role: "Advogada Associada",
    description: "Especialista focada no atendimento humanizado e na compreensão profunda do cenário de cada cliente.",
    image: "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/aline%20moreira.jpg"
  },
  {
    name: "Gustavo Lima",
    role: "Advogado Associado",
    description: "Atuação técnica exemplar com análise meticulosa, focada em construir a melhor defesa e estratégia.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600"
  }
];

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-brand-navy-light relative">
      <div className="absolute inset-0 border-t border-border-gold opacity-30"></div>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Nossa Equipe</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Líderes em <span className="italic text-brand-gold">defesa de direitos</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="opacity-60 text-lg font-light">
            Profissionais altamente capacitados, dedicados à proteção dos seus interesses com agilidade e técnica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-transparent group border border-border-gold hover:border-brand-gold transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="h-[350px] overflow-hidden relative">
                <div className="absolute inset-0 border border-brand-gold/10 m-3 z-10 pointer-events-none transition-colors duration-500 group-hover:border-brand-gold/30"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 border-t border-border-gold bg-prestige flex-1">
                <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
                <p className="text-brand-gold text-[10px] tracking-widest uppercase mb-4 opacity-80">{member.role}</p>
                <p className="opacity-60 leading-relaxed text-sm font-light">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
