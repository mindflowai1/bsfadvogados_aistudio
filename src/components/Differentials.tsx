import { motion } from 'motion/react';
import { Scale, HeartHandshake, Eye } from 'lucide-react';

const differentials = [
  {
    icon: Scale,
    title: "Anos de Experiência",
    description: "Liderados pelo Dr. Daniel Borges, acumulamos mais de uma década de atuação estratégica."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único. Ouvimos sua história com empatia e respeito à sua realidade."
  },
  {
    icon: Eye,
    title: "Comunicação Clara",
    description: "Sem \"juridiquês\". Você acompanha cada etapa do seu processo de forma informada e segura."
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-brand-navy relative">
      <div className="absolute inset-0 border-t border-border-gold opacity-30"></div>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Nossa Filosofia</span>
          <h2 className="text-3xl md:text-5xl mb-6">
            Excelência Jurídica com <span className="italic text-brand-gold">Experiência</span>, Humanidade e Transparência
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group p-10 border border-border-gold bg-prestige hover:border-brand-gold transition-all duration-500 relative"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-brand-gold">
                <item.icon className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl mb-4 text-white font-serif tracking-wide">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed text-white font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
