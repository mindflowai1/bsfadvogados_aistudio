import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  MessageCircle,
  FileSignature,
  PiggyBank,
  Wallet,
  Clock,
  HeartPulse,
  ShieldAlert,
  UserCheck,
  ShieldCheck,
  CalendarDays,
  Users,
  Gavel,
  FileText,
  ClipboardCheck,
  UserMinus,
  Handshake,
  Building2,
  Building,
  Landmark,
} from 'lucide-react';

type Category = {
  icon: typeof FileSignature;
  title: string;
  items: string[];
};

const workerCategories: Category[] = [
  {
    icon: FileSignature,
    title: "Rescisão e verbas rescisórias",
    items: [
      "Ação de rescisão indireta (a \"justa causa do empregador\")",
      "Irregularidades no cálculo e no pagamento das verbas rescisórias",
      "Atraso no pagamento da rescisão (multa do art. 477 da CLT)",
      "Reversão de justa causa aplicada indevidamente",
      "Dispensa discriminatória e pedido de reintegração",
      "Aviso prévio indenizado e proporcional",
      "Pedido de demissão viciado ou obtido sob coação",
      "Acordo de rescisão (distrato) e conferência de valores",
    ],
  },
  {
    icon: PiggyBank,
    title: "FGTS e seguro-desemprego",
    items: [
      "Falta de depósitos do FGTS",
      "Multa de 40% sobre o saldo do FGTS",
      "Liberação de guias e habilitação no seguro-desemprego",
    ],
  },
  {
    icon: Wallet,
    title: "Remuneração e salário",
    items: [
      "Equiparação salarial",
      "Desvio e acúmulo de função",
      "Diferenças salariais e descumprimento do piso da categoria",
      "Salário \"por fora\" e integração ao salário",
      "Comissões, prêmios e gratificações não pagos",
      "Descontos indevidos no salário",
      "Participação nos lucros e resultados (PLR)",
      "Redução salarial ilegal",
    ],
  },
  {
    icon: Clock,
    title: "Jornada de trabalho",
    items: [
      "Horas extras não pagas",
      "Banco de horas irregular",
      "Intervalo intrajornada (almoço) e interjornada suprimidos",
      "Adicional noturno e hora noturna reduzida",
      "Trabalho em domingos e feriados",
      "Sobreaviso e prontidão",
      "Controle de ponto irregular ou \"ponto britânico\"",
      "Jornada do motorista profissional",
      "Teletrabalho, home office e direito à desconexão",
    ],
  },
  {
    icon: HeartPulse,
    title: "Saúde e segurança do trabalhador",
    items: [
      "Adicional de insalubridade",
      "Adicional de periculosidade",
      "Acidente de trabalho e doença ocupacional",
      "Estabilidade acidentária",
      "Indenização por danos materiais, morais e estéticos",
      "Pensão mensal por incapacidade laboral",
      "Emissão de CAT (Comunicação de Acidente de Trabalho)",
      "Doenças psíquicas relacionadas ao trabalho, como a síndrome de burnout",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Dignidade e ambiente de trabalho",
    items: [
      "Assédio moral",
      "Assédio sexual",
      "Discriminação no trabalho (gênero, raça, idade, orientação sexual, deficiência, religião)",
      "Dano existencial por jornadas exaustivas",
      "Revista íntima e violação da intimidade",
      "Restrição ao uso do banheiro",
      "Cobrança abusiva de metas",
      "Trabalho em condições análogas às de escravo",
    ],
  },
  {
    icon: UserCheck,
    title: "Vínculo empregatício e contratação",
    items: [
      "Reconhecimento de vínculo empregatício",
      "Trabalho sem carteira assinada",
      "\"Pejotização\" e fraude na contratação como pessoa jurídica",
      "Falso autônomo e falso estagiário",
      "Trabalhadores de aplicativos e plataformas digitais",
      "Terceirização ilícita e responsabilidade da empresa tomadora",
      "Contrato temporário e intermitente irregulares",
      "Anotação e retificação da CTPS",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Estabilidades e garantias de emprego",
    items: [
      "Estabilidade da gestante",
      "Estabilidade do membro da CIPA",
      "Estabilidade do dirigente sindical",
      "Estabilidade pré-aposentadoria (quando prevista em norma coletiva)",
      "Licença-maternidade, licença-paternidade e direitos da lactante",
    ],
  },
  {
    icon: CalendarDays,
    title: "Férias e 13º salário",
    items: [
      "Férias vencidas, proporcionais e em dobro",
      "Terço constitucional de férias",
      "Fracionamento irregular de férias",
      "13º salário não pago ou pago a menor",
    ],
  },
  {
    icon: Users,
    title: "Categorias e relações específicas",
    items: [
      "Direitos do empregado doméstico",
      "Direitos do bancário (jornada de 6 horas e cargo de confiança)",
      "Direitos do trabalhador rural",
      "Direitos do professor",
      "Direitos dos profissionais da saúde",
      "Direitos do vigilante",
      "Direitos do aprendiz e do estagiário",
    ],
  },
  {
    icon: Gavel,
    title: "Atuação consultiva e processual",
    items: [
      "Consultoria trabalhista preventiva para o empregado",
      "Cálculos trabalhistas e conferência de rescisão",
      "Reclamação trabalhista",
      "Acordos judiciais e extrajudiciais",
      "Cumprimento de sentença e execução trabalhista",
      "Recursos perante o TRT e o TST",
      "Mediação e conciliação trabalhista",
    ],
  },
];

const companyCategories: Category[] = [
  {
    icon: FileText,
    title: "Consultoria preventiva e contratos",
    items: [
      "Elaboração e revisão de contratos de trabalho",
      "Contratos de experiência, temporários, intermitentes e de teletrabalho",
      "Contratos de executivos com cláusulas de confidencialidade e não concorrência",
      "Remuneração variável, bônus, comissões e benefícios",
      "Regulamentos internos e códigos de conduta",
      "Políticas de home office e de uso de ferramentas digitais",
      "Planos de cargos e salários (prevenção de equiparação salarial e desvio de função)",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance e auditoria trabalhista",
    items: [
      "Auditoria trabalhista preventiva e mapeamento de passivos",
      "Conferência de folha de pagamento, encargos e FGTS",
      "Controle de jornada, banco de horas e horas extras",
      "Orientação sobre as obrigações do eSocial",
      "Adequação à LGPD nas relações de trabalho",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Ambiente de trabalho e integridade",
    items: [
      "Programas de prevenção ao assédio moral e ao assédio sexual",
      "Estruturação de canal de denúncias",
      "Sindicâncias e investigações internas",
      "Treinamento de gestores e lideranças",
      "Políticas de diversidade e não discriminação",
    ],
  },
  {
    icon: HeartPulse,
    title: "Saúde e segurança do trabalho",
    items: [
      "Cumprimento das Normas Regulamentadoras",
      "Gerenciamento de riscos ocupacionais e psicossociais (NR-1)",
      "Caracterização de insalubridade e periculosidade",
      "Gestão de afastamentos e retorno ao trabalho",
      "Prevenção de acidentes de trabalho e doenças ocupacionais",
      "Orientação sobre a emissão da CAT",
    ],
  },
  {
    icon: UserMinus,
    title: "Desligamentos e reestruturações",
    items: [
      "Aplicação correta da justa causa",
      "Conferência de verbas rescisórias",
      "Acordos de rescisão (distrato)",
      "Programas de demissão voluntária (PDV)",
      "Reestruturação de quadro e dispensas coletivas",
    ],
  },
  {
    icon: Handshake,
    title: "Relações sindicais e coletivas",
    items: [
      "Negociação de acordos e convenções coletivas",
      "Participação nos lucros e resultados (PLR)",
      "Banco de horas e jornadas especiais por negociação coletiva",
      "Mediação de conflitos com sindicatos",
      "Atuação em dissídios coletivos e greves",
    ],
  },
  {
    icon: Building2,
    title: "Terceirização e formas de contratação",
    items: [
      "Análise de contratos com empresas prestadoras de serviços",
      "Fiscalização de obrigações trabalhistas de terceirizadas",
      "Mitigação da responsabilidade subsidiária da tomadora",
      "Riscos da \"pejotização\" e da contratação de autônomos",
      "Prevenção ao reconhecimento indevido de vínculo empregatício",
    ],
  },
  {
    icon: Building,
    title: "Operações societárias",
    items: [
      "Due diligence trabalhista em fusões e aquisições",
      "Análise de sucessão trabalhista",
      "Riscos de grupo econômico",
      "Reorganizações empresariais",
    ],
  },
  {
    icon: Gavel,
    title: "Contencioso trabalhista",
    items: [
      "Defesa em reclamações trabalhistas",
      "Preparação de prepostos e testemunhas",
      "Elaboração de contestações e cálculos trabalhistas",
      "Acordos judiciais e extrajudiciais",
      "Recursos perante o TRT e o TST",
      "Execução trabalhista e impugnação de cálculos",
      "Garantia do juízo por seguro-garantia",
      "Defesa de sócios em desconsideração da personalidade jurídica",
    ],
  },
  {
    icon: Landmark,
    title: "Atuação administrativa e perante o Ministério Público do Trabalho",
    items: [
      "Defesa contra autos de infração da fiscalização do trabalho",
      "Procedimentos instaurados pelo Ministério Público do Trabalho",
      "Negociação de Termos de Ajuste de Conduta (TAC)",
      "Defesa em ações civis públicas",
    ],
  },
];

type Audience = 'trabalhador' | 'empresa';

export function PracticeAreas() {
  const [audience, setAudience] = useState<Audience>('trabalhador');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de falar com um advogado trabalhista da BFS Advogados.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const categories = audience === 'trabalhador' ? workerCategories : companyCategories;

  const handleAudienceChange = (value: Audience) => {
    setAudience(value);
    setOpenIndex(0);
  };

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="areas-atuacao" className="py-24 bg-[#fbfaf7] relative border-t border-brand-gold/20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[160px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-4">Direito do Trabalho</span>
          <h2 className="text-3xl md:text-5xl mb-6 text-zinc-950 font-serif leading-tight">
            Áreas de <span className="italic text-brand-gold">Atuação</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
            Atuação especializada em Direito Trabalhista, tanto na defesa dos direitos do trabalhador quanto na assessoria preventiva e contenciosa para empresas.
          </p>
        </div>

        {/* Audience Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#080809] border border-brand-gold/20 rounded-sm p-1.5 gap-1">
            {([
              { key: 'trabalhador' as Audience, label: 'Sou Trabalhador' },
              { key: 'empresa' as Audience, label: 'Sou Empresa' },
            ]).map((opt) => {
              const isActive = audience === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => handleAudienceChange(opt.key)}
                  className={`relative px-6 py-3 text-[11px] md:text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-sm cursor-pointer ${
                    isActive ? 'text-black' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="audienceActiveBg"
                      className="absolute inset-0 bg-brand-gold rounded-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {categories.map((cat, index) => {
              const isOpen = openIndex === index;
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`border rounded-sm overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-brand-gold/50 bg-[#080809]' : 'border-zinc-200/70 bg-[#080809]/95 hover:border-brand-gold/30'
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 shrink-0">
                        <div className={`absolute inset-0 border rotate-45 transition-colors duration-300 ${isOpen ? 'border-brand-gold/60' : 'border-brand-gold/25'}`}></div>
                        <div className={`absolute inset-[5px] rotate-45 transition-colors duration-300 ${isOpen ? 'bg-brand-gold/20' : 'bg-brand-gold/10'}`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-brand-gold" />
                        </div>
                      </div>
                      <h3 className={`text-sm md:text-base font-serif tracking-wide transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-white group-hover:text-brand-gold'}`}>
                        {cat.title}
                      </h3>
                    </div>
                    <span className={`p-1 text-brand-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'opacity-50 group-hover:opacity-100'}`}>
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
                        <div className="px-6 pb-6 pt-1 border-t border-white/[0.06]">
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-5">
                            {cat.items.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-brand-gold hover:bg-brand-gold-light text-black font-bold uppercase text-xs tracking-widest transition-all duration-300 rounded-sm shadow-[0_10px_20px_-10px_rgba(197,160,89,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(197,160,89,0.6)]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            Falar com um Advogado Trabalhista
          </a>
        </div>
      </motion.div>
    </section>
  );
}
