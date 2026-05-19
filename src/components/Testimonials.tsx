import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Gustavo L.",
    text: "Sanou todas minhas dúvidas e resolveu meu problema. Profissionais atenciosos que me deram toda a segurança necessária no momento crítico."
  },
  {
    name: "Angelica F.",
    text: "Experiente, assertivo e muito humano. Valoriza os princípios humanos e familiares, algo raro hoje em dia. Sinto que meu caso foi tratado como prioridade."
  },
  {
    name: "Thauane L.",
    text: "Ótimo atendimento e muito profissionalismo. Explicam tudo com clareza sem termos complicados. Recomendo muito o trabalho da equipe."
  }
];

export function Testimonials() {
  return (
    <section id="clientes" className="py-24 bg-prestige relative overflow-hidden border-t border-border-gold">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy/50 -z-10 translate-x-1/2 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Reconhecimento</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            A chancela de nossos <span className="italic text-brand-gold">clientes</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="opacity-60 text-lg font-light">
            A satisfação e segurança de quem já contou com nossa assessoria artesanal e tecnológica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-navy p-10 border border-border-gold hover:border-brand-gold transition-all duration-500 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-gold opacity-10 rotate-180" />
              <p className="text-white opacity-80 leading-relaxed mb-8 font-serif italic text-lg relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-border-gold pt-6 mt-auto">
                <div>
                  <h4 className="font-semibold text-white tracking-wide uppercase text-xs mb-1">{testimonial.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Cliente — Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
