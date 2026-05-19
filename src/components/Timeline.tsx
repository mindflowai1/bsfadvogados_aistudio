import { motion } from 'motion/react';
import { Search, Map, ShieldCheck, Target } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Análise Inicial",
    description: "Estudo detalhado, identificando riscos e o melhor caminho para o seu caso específico."
  },
  {
    icon: Map,
    title: "2. Planejamento Personalizado",
    description: "Estratégia sob medida elaborada e alinhada diretamente aos seus objetivos principais."
  },
  {
    icon: ShieldCheck,
    title: "3. Atuação Técnica",
    description: "Execução ágil, responsável, com base em robustez jurídica e dentro da legalidade."
  },
  {
    icon: Target,
    title: "4. Acompanhamento Próximo",
    description: "Comunicação contínua e foco sistemático em resultados reais que impactam sua vida."
  }
];

export function Timeline() {
  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma análise inicial do meu caso.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="modelo" className="py-24 bg-brand-navy text-white relative">
      <div className="absolute inset-0 border-t border-border-gold opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Metodologia</span>
          <h2 className="text-3xl md:text-5xl mb-6 text-white font-serif">
            Como vamos <span className="italic text-brand-gold">cuidar do seu caso</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="opacity-60 text-lg font-light">
            Um processo claro e estruturado para garantir a melhor estratégia jurídica, reduzindo sua ansiedade.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Line */}
          <div className="hidden lg:block absolute top-[40px] left-8 w-[calc(100%-4rem)] h-[1px] bg-border-gold -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-transparent group"
              >
                <div className="w-20 h-20 bg-brand-navy border border-border-gold flex items-center justify-center mb-6 lg:-ml-4 transition-colors group-hover:border-brand-gold">
                  <step.icon className="w-8 h-8 text-brand-gold opacity-80" />
                </div>
                <h3 className="text-lg mb-3 text-white font-serif">{step.title}</h3>
                <p className="opacity-60 leading-relaxed text-sm font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black uppercase text-xs tracking-widest font-bold transition-all duration-300"
          >
            Agende sua Análise Inicial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
