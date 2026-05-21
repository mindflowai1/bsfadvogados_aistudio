import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria L.",
    category: "Direito Civil",
    text: "Passei por uma situação muito difícil quando tentaram tomar o imóvel da minha mãe, e achei que não conseguiríamos resolver. O escritório nos acompanhou em cada etapa com muita atenção e clareza, sempre explicando tudo de forma simples. Conseguimos a reintegração da posse e hoje estamos tranquilos novamente. Sou muito grata pelo cuidado e pela dedicação que tiveram com nossa causa."
  },
  {
    name: "Paulo S.",
    category: "Direito Empresarial",
    text: "Desde o início da empresa, o escritório sempre esteve ao nosso lado. Contratos, reuniões, orientações e qualquer problema jurídico que aparece, somos atendidos com rapidez e muita responsabilidade. O que mais gosto é a forma humana com que tratam a gente, sempre disponíveis e prontos para ajudar. Hoje temos muito mais segurança para tocar o nosso negócio."
  },
  {
    name: "Sandra C.",
    category: "Direito Trabalhista",
    text: "Procurei o escritório depois de passar por muitos problemas trabalhando em um hotel, sem receber meus direitos corretamente. Fui muito bem atendida desde a primeira conversa. Conseguimos o reconhecimento da insalubridade e todos os direitos da rescisão como deveriam ser pagos. Recomendo de olhos fechados, não só para causas trabalhistas, mas para qualquer situação jurídica em que a pessoa precise de um atendimento sério e humano."
  }
];

export function Testimonials() {
  return (
    <section id="clientes" className="py-24 bg-prestige relative overflow-hidden border-t border-border-gold">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy/50 -z-10 translate-x-1/2 rounded-full blur-[100px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Reconhecimento</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            A chancela de nossos <span className="italic text-brand-gold">clientes</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="opacity-60 text-lg font-light">
            A satisfação e segurança de quem já contou com nossa assessoria artesanal e tecnológica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-navy p-10 border border-border-gold hover:border-brand-gold transition-all duration-500 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-gold opacity-10 rotate-180" />
              <p className="text-white opacity-80 leading-relaxed mb-8 font-serif italic text-lg relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-border-gold pt-6 mt-auto">
                <div>
                  <h4 className="font-semibold text-white tracking-wide uppercase text-xs mb-1">{testimonial.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">{testimonial.category} — Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
