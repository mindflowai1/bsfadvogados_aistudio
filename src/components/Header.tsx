import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'A Banca', href: '#diferenciais' },
    { name: 'Método', href: '#modelo' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Reconhecimento', href: '#clientes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0f1115]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4 border-b border-border-gold/30' 
          : 'bg-transparent py-8 md:py-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 flex justify-between items-center bg-transparent">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-[82px] h-[82px] flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform duration-500 bg-transparent">
            <img 
              src="https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/ChatGPT%20Image%2019%20de%20mai.%20de%202026,%2009_36_50.png" 
              alt="BFS Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest text-white ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative opacity-70 hover:opacity-100 hover:text-brand-gold transition-all duration-300 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-bold transition-all duration-500 rounded-sm"
          >
            Consulta
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-white p-2 ml-auto z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          clipPath: mobileMenuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="lg:hidden fixed inset-0 z-40 bg-brand-navy w-full h-screen flex flex-col justify-center items-center"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-prestige opacity-50 z-0"></div>
        <nav className="flex flex-col items-center gap-8 text-sm uppercase tracking-widest text-white z-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors w-full text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-10 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-bold transition-all duration-500 rounded-sm"
          >
            Consultoria
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
