import { motion } from 'motion/react';
import { MessageCircle, Star, Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export function Hero() {
  const whatsappNumber = "5531985911342";
  const whatsappMessage = encodeURIComponent("Olá, visitei o site da BFS Advogados e gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen flex flex-col bg-brand-navy relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0"></div>

      {/* Modern Animated Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Stable linear gradient to prevent frame invalidation */}
            <linearGradient id="geom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c5a059" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#a8854c" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f3e5ab" stopOpacity="1.0" />
              <stop offset="75%" stopColor="#c5a059" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a8854c" stopOpacity="0.3" />
            </linearGradient>

            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f3e5ab" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
            </radialGradient>

            {/* Optimized high-performance GPU-friendly desfoque filter */}
            <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid rays and drafting lines */}
          <line x1="100" y1="0" x2="100" y2="1080" stroke="url(#geom-grad)" strokeWidth="1" className="opacity-15" />
          <line x1="288" y1="0" x2="288" y2="1080" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-25" />
          <line x1="600" y1="0" x2="600" y2="1080" stroke="url(#geom-grad)" strokeWidth="1" className="opacity-15" />
          <line x1="960" y1="0" x2="960" y2="1080" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-20" />
          <line x1="1320" y1="0" x2="1320" y2="1080" stroke="url(#geom-grad)" strokeWidth="1" className="opacity-15" />
          <line x1="1440" y1="0" x2="1440" y2="1080" stroke="url(#geom-grad)" strokeWidth="2" className="opacity-30" />
          <line x1="1720" y1="0" x2="1720" y2="1080" stroke="url(#geom-grad)" strokeWidth="1" className="opacity-15" />
          
          <line x1="0" y1="150" x2="1920" y2="150" stroke="url(#geom-grad)" strokeWidth="1" className="opacity-15" />
          <line x1="0" y1="540" x2="1920" y2="540" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-25" />
          <line x1="0" y1="810" x2="1920" y2="810" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-25" />
          <line x1="0" y1="920" x2="1920" y2="920" stroke="url(#geom-grad)" strokeWidth="1-5" className="opacity-15" />

          {/* Oblique architectural lines */}
          <line x1="-200" y1="200" x2="2120" y2="860" stroke="url(#geom-grad)" strokeWidth="2.5" className="opacity-45 svg-glow" />
          <line x1="-200" y1="500" x2="2120" y2="1160" stroke="url(#geom-grad)" strokeWidth="2.5" className="opacity-40 svg-glow" />
          <line x1="384" y1="-100" x2="1536" y2="1180" stroke="url(#geom-grad)" strokeWidth="2" className="opacity-35 svg-glow" />
          <line x1="1152" y1="-100" x2="2304" y2="1180" stroke="url(#geom-grad)" strokeWidth="2" className="opacity-35 svg-glow" />

          {/* Intersecting Diamond Wireframe Paths */}
          <g className="animate-pulse-slow svg-glow">
            <polygon points="400,100 600,300 400,500 200,300" fill="none" stroke="url(#geom-grad)" strokeWidth="2.5" className="opacity-35" />
            <line x1="200" y1="300" x2="600" y2="300" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-20" />
            <line x1="400" y1="100" x2="400" y2="500" stroke="url(#geom-grad)" strokeWidth="1.5" className="opacity-20" />
          </g>
          
          <g className="animate-pulse-slow svg-glow" style={{ animationDelay: '2s' }}>
            <polygon points="960,550 1160,750 960,950 760,750" fill="none" stroke="url(#geom-grad)" strokeWidth="2" className="opacity-30" />
            <line x1="760" y1="750" x2="1160" y2="750" stroke="url(#geom-grad)" strokeWidth="1.25" className="opacity-20" />
            <line x1="960" y1="550" x2="960" y2="950" stroke="url(#geom-grad)" strokeWidth="1.25" className="opacity-20" />
          </g>

          {/* Rotating Geometric Diamond & Square Grid on the Right (Behind the quote) */}
          <g className="animate-spin-slow origin-astrolabe-right opacity-85 svg-glow">
            {/* Outer Diamond */}
            <polygon points="1440,240 1740,540 1440,840 1140,540" fill="none" stroke="url(#geom-grad)" strokeWidth="3" />
            
            {/* Concentric Rectangles / Diamonds */}
            <rect x="1240" y="340" width="400" height="400" fill="none" stroke="url(#geom-grad)" strokeWidth="2" />
            <polygon points="1440,260 1720,540 1440,820 1160,540" fill="none" stroke="url(#geom-grad)" strokeWidth="2" strokeDasharray="6 10" />
            <polygon points="1440,380 1600,540 1440,700 1280,540" fill="none" stroke="url(#geom-grad)" strokeWidth="1.75" />
            <rect x="1390" y="490" width="100" height="100" fill="none" stroke="url(#geom-grad)" strokeWidth="3" strokeDasharray="12 6" />
            
            {/* Structural Crosshairs & rays */}
            <line x1="1440" y1="140" x2="1440" y2="940" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="1040" y1="540" x2="1840" y2="540" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="1157" y1="257" x2="1723" y2="823" stroke="url(#geom-grad)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="1157" y1="823" x2="1723" y2="257" stroke="url(#geom-grad)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Blueprint End Caps */}
            <line x1="1430" y1="140" x2="1450" y2="140" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="1430" y1="940" x2="1450" y2="940" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="1040" y1="530" x2="1040" y2="550" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="1840" y1="530" x2="1840" y2="550" stroke="url(#geom-grad)" strokeWidth="1.5" />
          </g>

          {/* Rotating Reverse Diamond Assembly on the Left */}
          <g className="animate-spin-reverse-slow origin-astrolabe-left opacity-75 svg-glow">
            <polygon points="288,610 488,810 288,1010 88,810" fill="none" stroke="url(#geom-grad)" strokeWidth="2.5" />
            <rect x="158" y="680" width="260" height="260" fill="none" stroke="url(#geom-grad)" strokeWidth="2" strokeDasharray="8 8" />
            <polygon points="288,710 388,810 288,910 188,810" fill="none" stroke="url(#geom-grad)" strokeWidth="1.5" />
            
            <line x1="288" y1="560" x2="288" y2="1060" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="38" y1="810" x2="538" y2="810" stroke="url(#geom-grad)" strokeWidth="1.5" />
            
            <line x1="278" y1="560" x2="298" y2="560" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="278" y1="1060" x2="298" y2="1060" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="38" y1="800" x2="38" y2="820" stroke="url(#geom-grad)" strokeWidth="1.5" />
            <line x1="538" y1="800" x2="538" y2="820" stroke="url(#geom-grad)" strokeWidth="1.5" />
          </g>

          {/* High-Tech Glowing Intersection Nodes (No Circle Outlines) */}
          <g className="animate-node-glow">
            <circle cx="528" cy="418" r="40" fill="url(#node-glow)" className="opacity-80" />
            <line x1="520" y1="418" x2="536" y2="418" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <line x1="528" y1="410" x2="528" y2="426" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <polygon points="528,413 533,418 528,423 523,418" fill="#f3e5ab" className="svg-glow" />
          </g>
          
          <g className="animate-node-glow" style={{ animationDelay: '1.5s' }}>
            <circle cx="1315" cy="540" r="50" fill="url(#node-glow)" className="opacity-90" />
            <line x1="1305" y1="540" x2="1325" y2="540" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <line x1="1315" y1="530" x2="1315" y2="550" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <polygon points="1315,535 1320,540 1315,545 1310,540" fill="#f3e5ab" className="svg-glow" />
          </g>
          
          <g className="animate-node-glow" style={{ animationDelay: '2.5s' }}>
            <circle cx="960" cy="864" r="30" fill="url(#node-glow)" className="opacity-75" />
            <line x1="952" y1="864" x2="968" y2="864" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <line x1="960" y1="856" x2="960" y2="872" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <polygon points="960,860 964,864 960,868 956,864" fill="#f3e5ab" className="svg-glow" />
          </g>
          
          <g className="animate-node-glow" style={{ animationDelay: '0.8s' }}>
            <circle cx="1632" cy="270" r="40" fill="url(#node-glow)" className="opacity-80" />
            <line x1="1624" y1="270" x2="1640" y2="270" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <line x1="1632" y1="262" x2="1632" y2="278" stroke="#f3e5ab" strokeWidth="2" className="svg-glow" />
            <polygon points="1632,265 1637,270 1632,275 1627,270" fill="#f3e5ab" className="svg-glow" />
          </g>
        </svg>
      </div>

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
            className="lg:col-span-5 h-[500px] lg:h-[550px] relative hidden lg:block"
          >
            {/* Staggered Floating Validation Cards Composition */}
            <div className="absolute inset-0 select-none">
              
              {/* Background Geometric Grid Accent (for the cards to float over) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <svg className="w-[85%] h-[85%] text-brand-gold/45" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Concentric diamond grid lines */}
                  <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="transform rotate-45 origin-center" />
                  <rect x="100" y="100" width="200" height="200" stroke="currentColor" strokeWidth="1.5" className="transform rotate-45 origin-center" />
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Glowing core */}
                  <circle cx="200" cy="200" r="10" fill="currentColor" className="animate-pulse" />
                </svg>
              </div>

              {/* Card 1: Experience */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(197, 160, 89, 0.7)", boxShadow: "0 15px 35px -10px rgba(197,160,89,0.35)" }}
                className="absolute top-[30px] left-[6%] w-[240px] bg-[#050505]/85 backdrop-blur-md border border-brand-gold/15 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white font-semibold leading-none mb-1">+15 Anos</h4>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-medium mb-1.5">Atuação Nacional</p>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light">Representando causas complexas em todo o país.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Litigation Success */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.4 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(197, 160, 89, 0.7)", boxShadow: "0 15px 35px -10px rgba(197,160,89,0.35)" }}
                className="absolute top-[140px] right-[2%] w-[240px] bg-[#050505]/85 backdrop-blur-md border border-brand-gold/15 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white font-semibold leading-none mb-1">98.4%</h4>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-medium mb-1.5">Taxa de Êxito</p>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light">Resultados expressivos em teses jurídicas e acordos.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Satisfied Clients */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(197, 160, 89, 0.7)", boxShadow: "0 15px 35px -10px rgba(197,160,89,0.35)" }}
                className="absolute bottom-[150px] left-[2%] w-[240px] bg-[#050505]/85 backdrop-blur-md border border-brand-gold/15 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white font-semibold leading-none mb-1">+5.000</h4>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-medium mb-1.5">Clientes Atendidos</p>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light">Casos solucionados e parcerias corporativas sólidas.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Integrity & Trust */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 0.6 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(197, 160, 89, 0.7)", boxShadow: "0 15px 35px -10px rgba(197,160,89,0.35)" }}
                className="absolute bottom-[30px] right-[6%] w-[240px] bg-[#050505]/85 backdrop-blur-md border border-brand-gold/15 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white font-semibold leading-none mb-1">100%</h4>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-medium mb-1.5">Segurança Jurídica</p>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light">Conformidade e governança de altíssimo padrão.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
