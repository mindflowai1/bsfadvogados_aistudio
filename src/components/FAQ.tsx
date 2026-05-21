import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FolderOpen } from 'lucide-react';

const categories = ["Direito Empresarial", "Direito do Trabalho", "Direito Civil"];

const faqs = [
  {
    category: "Direito Empresarial",
    question: "Quais problemas empresariais o escritório atende?",
    answer: "Atuamos em conflitos societários, recuperação de crédito, inadimplência, cobranças, elaboração e revisão de contratos, disputas empresariais, responsabilidade de sócios, negociações comerciais, execuções, defesa judicial de empresas e assessoria preventiva para redução de riscos jurídicos."
  },
  {
    category: "Direito Empresarial",
    question: "Minha empresa está enfrentando problemas jurídicos ou financeiros. Como um advogado empresarial pode ajudar?",
    answer: "O suporte jurídico empresarial auxilia na prevenção de prejuízos, estruturação contratual, proteção patrimonial, resolução de conflitos, defesa em processos judiciais e criação de estratégias para maior segurança e estabilidade da empresa."
  },
  {
    category: "Direito do Trabalho",
    question: "Quais tipos de causas trabalhistas o escritório atende?",
    answer: "Atuamos em ações envolvendo verbas rescisórias, vínculo empregatício, horas extras, FGTS, adicional de insalubridade e periculosidade, acidentes de trabalho, assédio moral, reversão de justa causa, estabilidade gestacional, reconhecimento de direitos trabalhistas e defesa de empresas em reclamações trabalhistas."
  },
  {
    category: "Direito do Trabalho",
    question: "O escritório atua tanto para trabalhadores quanto para empresas?",
    answer: "Sim. Prestamos assessoria para trabalhadores na busca de direitos trabalhistas e também para empresas na defesa de processos, prevenção de passivos e adequação às normas trabalhistas."
  },
  {
    category: "Direito Civil",
    question: "Quais problemas na área cível o escritório resolve?",
    answer: "Atuamos em ações de indenização, cobranças, responsabilidade civil, descumprimento contratual, conflitos patrimoniais, direito do consumidor, negativação indevida, reparação de danos materiais e morais, obrigações, disputas envolvendo contratos e negociações extrajudiciais."
  },
  {
    category: "Direito Civil",
    question: "Quando devo procurar um advogado cível?",
    answer: "Sempre que houver prejuízo financeiro, descumprimento de contrato, dívida não paga, dano moral, conflito jurídico ou necessidade de proteção de direitos patrimoniais e pessoais."
  }
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Direito Empresarial");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default for neatness

  // Filter FAQs based on active category
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setOpenIndex(0); // Open the first question of the new category automatically
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
        className="max-w-6xl mx-auto px-8 md:px-12 relative z-10"
      >
        
        {/* Modern Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-brand-gold/15">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold block mb-2">Suporte Jurídico</span>
            <h2 className="text-2xl md:text-4xl font-serif text-zinc-900">
              Perguntas <span className="italic text-brand-gold">Frequentes</span>
            </h2>
          </div>
          <p className="text-zinc-600 text-xs md:text-sm font-light max-w-md leading-relaxed">
            Selecione uma área jurídica abaixo para visualizar respostas objetivas sobre como protegemos seus direitos.
          </p>
        </div>

        {/* Tabbed Category Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Minimal Tabs Menu */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:flex lg:flex-col gap-2 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-brand-gold/15 pr-0 lg:pr-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-3 py-3 text-left rounded-sm transition-all duration-300 font-serif tracking-wide text-xs lg:text-sm flex items-center justify-center lg:justify-start gap-2 lg:gap-3 w-full cursor-pointer ${
                    isActive 
                      ? 'text-brand-gold font-semibold bg-brand-gold/[0.08]' 
                      : 'text-zinc-500 hover:text-zinc-800 hover:bg-brand-gold/[0.02]'
                  }`}
                >
                  {/* Left indicator line on desktop */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-gold hidden lg:block"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Bottom indicator line on mobile */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicatorMobile"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold lg:hidden"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <FolderOpen className={`w-4 h-4 shrink-0 transition-colors hidden lg:block ${isActive ? 'text-brand-gold' : 'text-zinc-400'}`} />
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Column: Q&A List */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {filteredFaqs.map((faq, index) => {
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
                          <span className={`p-1 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : 'opacity-50 group-hover:opacity-100'}`}>
                            <ChevronDown className="w-4 h-4" />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-zinc-600 font-light leading-relaxed border-t border-zinc-100">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
