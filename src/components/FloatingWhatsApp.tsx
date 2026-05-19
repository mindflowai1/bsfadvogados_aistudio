import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, visitei o site da BFS Advogados e gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1EBE53] hover:scale-110 transition-all duration-300"
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
