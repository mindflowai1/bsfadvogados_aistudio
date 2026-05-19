import { motion } from 'motion/react';
import { MessageCircle, Star } from 'lucide-react';

export function Hero() {
  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, visitei o site da BFS Advogados e gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen flex flex-col bg-brand-navy relative overflow-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 pt-32 lg:pt-40">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-white">
                Assessoria Jurídica<br/>de <span className="italic text-brand-gold">Excelência.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-lg opacity-60 max-w-md leading-relaxed font-light mb-10 text-white">
                Por trás de cada processo, existe uma história que merece ser respeitada. Unimos nossos +10 anos de experiência com um atendimento verdadeiramente humanizado para proteger o seu patrimônio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-gold hover:bg-brand-gold-light text-black text-xs uppercase tracking-widest font-bold transition-colors duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Fale com um Advogado
              </a>
              
              <div className="flex flex-col gap-1 items-start sm:items-start text-white/90">
                <div className="flex gap-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] tracking-widest uppercase opacity-60 mt-1">5 Estrelas no Google</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="lg:col-span-5 h-[500px] lg:h-full min-h-[400px] relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-prestige border border-border-gold opacity-40 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border border-border-gold opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
              <div className="w-full h-full border border-border-gold opacity-30 flex flex-col justify-end p-8">
                <div className="w-12 h-1 bg-brand-gold mb-4"></div>
                <span className="font-serif italic text-2xl text-white opacity-80 leading-relaxed">"A lei é a razão livre da paixão."</span>
                <span className="text-[10px] uppercase tracking-widest mt-4 text-white opacity-40">— Aristóteles</span>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
