import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quais tipos de causas trabalhistas o escritório atende?",
    answer: "Atuamos em ações envolvendo verbas rescisórias, vínculo empregatício, horas extras, FGTS, adicional de insalubridade e periculosidade, acidentes de trabalho, assédio moral, reversão de justa causa, estabilidade gestacional, reconhecimento de direitos trabalhistas e defesa de empresas em reclamações trabalhistas."
  },
  {
    question: "O escritório atua tanto para trabalhadores quanto para empresas?",
    answer: "Sim. Prestamos assessoria para trabalhadores na busca de seus direitos trabalhistas e também para empresas, na defesa em processos, na prevenção de passivos e na adequação às normas trabalhistas."
  },
  {
    question: "Fui demitido(a) e acho que não recebi minhas verbas rescisórias corretamente. O que fazer?",
    answer: "O ideal é reunir os documentos do contrato de trabalho (carteira assinada, contracheques, termo de rescisão) e buscar uma conferência dos valores com um advogado trabalhista. Muitas irregularidades só são identificadas em um cálculo detalhado das verbas devidas."
  },
  {
    question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
    answer: "O prazo prescricional é de até 2 anos após o fim do contrato de trabalho para ajuizar a ação, podendo cobrar valores referentes aos últimos 5 anos trabalhados. Por isso, é importante buscar orientação jurídica o quanto antes."
  },
  {
    question: "Minha empresa pode ser responsabilizada por passivos trabalhistas de terceirizados?",
    answer: "Sim, a empresa tomadora de serviços pode responder subsidiariamente por débitos trabalhistas da terceirizada. Por isso recomendamos auditoria contratual preventiva e acompanhamento contínuo das obrigações trabalhistas dos prestadores."
  },
  {
    question: "É possível resolver uma questão trabalhista sem ir à Justiça?",
    answer: "Sim. Muitos casos são resolvidos por meio de negociação direta ou acordo extrajudicial, de forma mais rápida e com menos desgaste para as partes. Quando não há acordo, avaliamos a via judicial mais adequada para o caso."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#fbfaf7] relative overflow-hidden border-t border-brand-gold/20">
      {/* Sleek light gold glowing decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-8 md:px-12 relative z-10"
      >

        {/* Centered Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-4">Direito do Trabalho</span>
          <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6">
            Perguntas <span className="italic text-brand-gold">Frequentes</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Q&A List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 border rounded-sm overflow-hidden ${
                  isOpen
                    ? 'border-brand-gold/35 bg-white shadow-[0_12px_40px_rgba(197,160,89,0.08)]'
                    : 'border-zinc-200/70 bg-white/70 hover:border-brand-gold/25 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <h3 className={`text-sm md:text-base font-serif transition-colors duration-300 ${isOpen ? 'text-brand-gold font-medium' : 'text-zinc-800 group-hover:text-brand-gold'}`}>
                    {faq.question}
                  </h3>
                  <span className={`p-1 text-brand-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'opacity-50 group-hover:opacity-100'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-zinc-600 font-light leading-relaxed border-t border-zinc-100">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
