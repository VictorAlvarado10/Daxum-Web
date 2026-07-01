import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Bot, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  Database, 
  Eye, 
  FileSpreadsheet, 
  LineChart, 
  Mail, 
  Menu, 
  Phone, 
  TrendingUp, 
  X,
  Target,
  Settings,
  Users,
  ArrowRight,
  Globe
} from 'lucide-react';

import imgRoboticArm from './assets/images/robotic_arm_automation_1782851475901.jpg';
import imgDataIntegration from './assets/images/data_integration_cables_1782851692811.jpg';
import imgDashboardExecutive from './assets/images/dashboard_executive_1782851511208.jpg';
import imgDataCleaning from './assets/images/data_cleaning_realistic_1782851923541.jpg';
import imgCommercialAnalysis from './assets/images/commercial_analysis_1782851529633.jpg';
import imgPredictiveModels from './assets/images/predictive_models_1782851537932.jpg';
import imgMexicoMap from './assets/images/mexico_map_ui_1782854552869.jpg';

const DaxumLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="/logo.svg" 
      alt="DAXUM Data Intelligence" 
      className="h-9 sm:h-10 w-auto"
    />
  </div>
);

const DaxumLogoWhite = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="/logo-blanco.svg" 
      alt="DAXUM Data Intelligence" 
      className="h-9 sm:h-10 w-auto"
    />
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ContactCTA = () => (
  <a 
    href="https://wa.me/526672095329"
    target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all rounded-lg bg-daxum-blue hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
  >
    Agendar diagnóstico
  </a>
);

const IconSpreadsheet = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" opacity="0.3"/>
    <path d="M14 3v5h5M8 13h8M8 17h8M12 13v6" />
  </svg>
);

const IconTarget = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" opacity="0.3" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const IconEye = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7z" opacity="0.3"/>
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

const IconClock = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" opacity="0.3" />
    <path d="M12 6v6l4.5 4.5" />
  </svg>
);

const IconChart = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20h18" opacity="0.3"/>
    <path d="M18 6v11M12 10v7M6 14v3" />
    <path d="M3 3v17" opacity="0.3" />
  </svg>
);

const IconUsers = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4" opacity="0.3" />
    <path d="M15 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="16.5" cy="11.5" r="3.5" opacity="0.3" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navLinks = [
    { name: 'Problemas', href: '#problemas' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos Reales', href: '#casos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="min-h-screen font-sans text-daxum-navy selection:bg-daxum-light selection:text-daxum-navy">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between transition-all duration-300 h-16">
            <a href="#" className="flex-shrink-0">
              <DaxumLogo />
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-daxum-blue transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/526672095329" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-medium text-white bg-daxum-blue rounded-lg hover:bg-blue-600 transition-colors">
                Agendar diagnóstico
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 hover:text-daxum-blue">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-daxum-blue hover:bg-gray-50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a href="https://wa.me/526672095329" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-5 py-3 text-base font-medium text-white bg-daxum-blue rounded-lg hover:bg-blue-600">
                    Agendar diagnóstico
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Corporate Architecture Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full md:w-[85%] lg:w-[75%]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Corporate Architecture" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Gradients to fade the image smoothly into the white background on the left and bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-5xl">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-heading leading-[1.15] tracking-tight mb-6 text-daxum-navy text-left max-w-4xl">
                 Deja de operar a ciegas,<br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-daxum-blue to-purple-600">
                   detecta oportunidades ocultas
                 </span><br />
                 <span className="text-daxum-blue">en tus datos.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-medium text-left max-w-2xl">
                Transformamos datos en información confiable para fortalecer la toma de decisiones y detectar oportunidades de rentabilidad. Automatizamos procesos de gestión de datos para reducir errores y elevar la productividad.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
                <ContactCTA />
                <a href="#soluciones" className="inline-flex items-center justify-center px-6 py-3 font-medium text-daxum-navy transition-all border border-gray-200 bg-white rounded-lg hover:border-daxum-blue hover:bg-gray-50 hover:shadow-sm">
                  Explorar soluciones
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Feature Cards Floating */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mt-8">
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                 <div className="text-left md:pr-8">
                   <div className="h-1 w-24 bg-gradient-to-r from-daxum-blue to-purple-500 rounded-full mb-4 opacity-80"></div>
                   <h3 className="text-lg font-bold text-daxum-navy mb-2">Más claridad</h3>
                   <p className="text-sm text-gray-600">Indicadores simples para entender el estado real de tu negocio.</p>
                 </div>
                 <div className="text-left pt-6 md:pt-0 md:px-8">
                   <div className="h-1 w-24 bg-gradient-to-r from-daxum-blue to-purple-500 rounded-full mb-4 opacity-80"></div>
                   <h3 className="text-lg font-bold text-daxum-navy mb-2">Menos retrabajo</h3>
                   <p className="text-sm text-gray-600">Automatización de reportes repetitivos y procesos manuales.</p>
                 </div>
                 <div className="text-left pt-6 md:pt-0 md:px-8">
                   <div className="h-1 w-24 bg-gradient-to-r from-daxum-blue to-purple-500 rounded-full mb-4 opacity-80"></div>
                   <h3 className="text-lg font-bold text-daxum-navy mb-2">Mejor control</h3>
                   <p className="text-sm text-gray-600">Información centralizada para ventas, operación y administración.</p>
                 </div>
                 <div className="text-left pt-6 md:pt-0 md:pl-8">
                   <div className="h-1 w-24 bg-gradient-to-r from-daxum-blue to-purple-500 rounded-full mb-4 opacity-80"></div>
                   <h3 className="text-lg font-bold text-daxum-navy mb-2">Mayor rentabilidad</h3>
                   <p className="text-sm text-gray-600">Datos accionables para detectar fugas, oportunidades y mejoras.</p>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Problems Section (DARK) */}
      <section id="problemas" className="relative py-24 bg-[#11203A] text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           {/* Subtle glow elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
           {/* Background Grid Lines (Abstract) */}
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
            <FadeIn className="lg:pt-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold font-heading mb-8 leading-snug text-white">
                Si tu operación depende de reportes manuales o no tienes indicadores confiables probablemente estás perdiendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">tiempo y dinero</span>
              </h2>
              <div className="relative pl-5 py-1 mb-10">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <p className="text-lg text-gray-400 italic">
                  Y lo más crítico: no sabes exactamente cuánto te está costando seguir así.
                </p>
              </div>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-3.5 font-medium text-white transition-all rounded-lg bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400/30"
              >
                Agenda un diagnóstico
              </a>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {[
                { icon: IconSpreadsheet, text: "Tus reportes se hacen en Excel y toman horas o días" },
                { icon: IconTarget, text: "La información no cuadra entre áreas" },
                { icon: IconEye, text: "Tomas decisiones sin datos confiables" },
                { icon: IconClock, text: "Hay procesos repetitivos que consumen tiempo operativo" },
                { icon: IconChart, text: "No tienes visibilidad clara de ventas, inventario o desempeño" },
                { icon: IconUsers, text: "Tu equipo depende de archivos, fórmulas y personas clave" }
              ].map((problem, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-start p-6 rounded-2xl bg-[#1D2B4A] border border-blue-500/20 hover:bg-[#24355A] hover:border-blue-400/40 transition-all h-full group shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                    <div className="mb-5 text-blue-300 bg-blue-950/50 border border-blue-400/40 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-1 ring-white/5">
                      <problem.icon size={28} strokeWidth={2.2} />
                    </div>
                    <p className="text-gray-100 text-base font-medium leading-relaxed">{problem.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section (LIGHT) */}
      <section id="soluciones" className="relative py-24 bg-white text-daxum-navy overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading mb-6 text-daxum-navy leading-tight">
                Convertimos tus datos en <span className="text-blue-600">control real</span><br className="hidden md:block" /> del negocio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Diseñamos soluciones prácticas que integran la información que ya tienes para<br className="hidden md:block" /> automatizar procesos, generar indicadores claros y ayudarte a tomar mejores decisiones.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Automatización\noperativa", 
                desc: "Automatización de procesos\noperativos diarios.",
                bgImg: imgRoboticArm 
              },
              { 
                title: "Integración\nde fuentes", 
                desc: "Integración de múltiples fuentes de\ndatos inconexas.",
                bgImg: imgDataIntegration 
              },
              { 
                title: "Dashboards\nejecutivos", 
                desc: "Visualizaciones claras y\naccionables en tiempo real.",
                bgImg: imgDashboardExecutive 
              },
              { 
                title: "Limpieza\nde datos", 
                desc: "Organización y limpieza de\ninformación histórica.",
                bgImg: imgDataCleaning 
              },
              { 
                title: "Análisis\ncomercial", 
                desc: "Análisis para decisiones\ncomerciales y operativas.",
                bgImg: imgCommercialAnalysis 
              },
              { 
                title: "Modelos\npredictivos", 
                desc: "Simulaciones y modelos predictivos\nbásicos para el futuro.",
                bgImg: imgPredictiveModels 
              }
            ].map((sol, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative overflow-hidden group rounded-xl shadow-lg transition-all duration-300 h-[260px] flex flex-col p-8 cursor-pointer bg-[#050A15] border border-[#1E293B]">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={sol.bgImg} 
                      alt={sol.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050A15] from-10% via-[#050A15]/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/80 via-transparent to-transparent z-10"></div>
                    {/* Blue tint overlay */}
                    <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10"></div>
                  </div>
                  
                  {/* Decorative L-shape gradient border at bottom left */}
                  <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 z-20 opacity-80 group-hover:w-1/2 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-[2px] h-16 bg-gradient-to-t from-purple-500 to-blue-500 z-20 opacity-80 group-hover:h-1/2 transition-all duration-500"></div>
                  
                  <div className="relative z-20 flex flex-col justify-end h-full text-left max-w-[80%]">
                    <h3 className="text-2xl font-bold font-heading text-white mb-2 leading-tight whitespace-pre-line group-hover:text-blue-400 transition-colors">{sol.title}</h3>
                    <p className="text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-line">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center hidden">
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto italic">
                "Entendemos tu operación y la mejoramos con los datos"
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Packages (DARK) */}
      <section id="servicios" className="py-24 bg-[#11203A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">Soluciones listas para generar impacto</h2>
              <p className="text-gray-400">Paquetes productizados pensados en darte resultados rápidos y tangibles.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automatización de reportes y procesos",
                result: "Reducir trabajo manual, errores y tiempos operativos",
                includes: ["Automatización de reportes.", "Integración y limpieza de datos de distintas fuentes.", "Apps, formularios o flujos para capturar información operativa"],
                ideal: "Empresas que dependen de archivos manuales o reportes repetitivos",
                highlight: true
              },
              {
                title: "Dashboard e inteligencia de negocios",
                result: "Tener visibilidad clara de ventas, operaciones y rentabilidad.",
                includes: ["Definición de KPIs alineados al negocio.", "Modelos de datos y tableros ejecutivos.", "Indicadores comerciales, financieros, operativos o de RH."],
                ideal: "Dirección y gerencias que necesitan tomar decisiones con información confiable",
                highlight: false
              },
              {
                title: "Inteligencia comercial y de mercado",
                result: "Detectar oportunidades de venta, competencia y expansión.",
                includes: ["Monitoreo de precios de competidores y tendencias del mercado.", "Prospección comercial con datos públicos y fuentes externas.", "Análisis territorial, sociodemográfico y de cobertura comercial."],
                ideal: "Empresas que quieren crecer, competir mejor o encontrar nuevos clientes",
                highlight: false
              },
              {
                title: "Analítica predictiva y proyectos de impacto",
                result: "Anticipar escenarios y mejorar decisiones estratégicas.",
                includes: ["Proyecciones de ventas, demanda, flujo, merma o inventario.", "Modelos de factibilidad para aperturas o expansión", "Análisis de rentabilidad, escenarios y variables críticas del negocio."],
                ideal: "Empresas con decisiones complejas de inversión, crecimiento u operación",
                highlight: false
              }
            ].map((pkg, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="flex">
                <div className={`flex flex-col w-full bg-white rounded-2xl shadow-sm border ${pkg.highlight ? 'border-daxum-blue shadow-daxum-blue/20 shadow-xl relative' : 'border-gray-200'} p-6 transition-transform hover:-translate-y-1`}>
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-daxum-blue text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                      Más Popular
                    </div>
                  )}
                  <div className="min-h-[84px] mb-3 flex items-start">
                    <h3 className="text-xl font-bold font-heading text-daxum-navy leading-snug">{pkg.title}</h3>
                  </div>
                  <div className="mb-5 pb-5 border-b border-gray-100 min-h-[96px]">
                    <p className="text-sm text-gray-500 mb-1">Resultado esperado:</p>
                    <p className="font-semibold text-daxum-blue leading-snug">{pkg.result}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto px-4 py-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-center text-gray-500">Ideal para:</p>
                    <p className="text-sm text-center font-medium text-daxum-navy mt-1">{pkg.ideal}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#1A2C4D] to-[#11203A] border border-[#2A4066] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-daxum-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 text-white">¿No sabes qué solución necesita tu empresa?</h3>
                <p className="text-gray-300 mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                  Agenda un diagnóstico de datos y detectamos qué procesos, reportes o indicadores pueden generar mayor impacto en tu operación.
                </p>
                <a 
                  href="https://wa.me/526672095329"
                  target="_blank" rel="noopener noreferrer"
                  className="bg-daxum-blue hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(33,118,255,0.3)] hover:shadow-[0_0_30px_rgba(33,118,255,0.5)]"
                >
                  Agendar diagnóstico
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Cases (LIGHT) */}
      <section id="casos" className="py-24 bg-gray-50 text-daxum-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn>
            <div className="mb-16 max-w-3xl">
              <span className="text-daxum-blue font-bold tracking-wider uppercase text-sm mb-2 block">Impacto Real</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-daxum-navy mb-4">Resultados que se miden en dinero y tiempo</h2>
              <p className="text-gray-600 text-lg">No hacemos dashboards bonitos. Construimos herramientas que cambian la forma de hacer negocios.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
             {[
               {
                 title: "Expansión inteligente de sucursales",
                 desc: "Modelo que combina históricos de venta, ubicación, competencia y datos sociodemográficos para evaluar el potencial de nuevas aperturas.",
                 bullets: ["Identificación de zonas con alto riesgo comercial", "Priorización de ubicaciones con mayor potencial", "Mejor toma de decisiones de inversión"],
                 impact: "Se protegieron inversiones de hasta $600,000 por sucursal",
                 img: imgMexicoMap
               },
               {
                 title: "Automatización que reemplazó software",
                 desc: "Digitalización de auditorías, aplicación móvil y dashboards para dar seguimiento inmediato a hallazgos operativos.",
                 bullets: ["Eliminación de captura manual", "Evidencia centralizada y trazable", "Mayor control sobre acciones correctivas"],
                 impact: "Ahorro en licencias de $13,000 de forma mensual",
                 img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2074"
               },
               {
                 title: "Recuperación financiera acelerada",
                 desc: "Automatización del procesamiento de información fiscal y administrativa que se encontraba atrasada y afectaba la recuperación de saldo.",
                 bullets: ["Reducción significativa del tiempo de procesamiento", "Información estructurada para seguimiento y cumplimiento", "Recuperación de dinero con mayor velocidad"],
                 impact: "Recuperación de saldo por más de $200,000",
                 img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072"
               },
               {
                 title: "Modelos predictivos de negocio",
                 desc: "Proyecciones de ventas, demanda, merma, flujo de efectivo e inventario para anticipar escenarios y mejorar la planeación.",
                 bullets: ["Forecast para decisiones comerciales y operativas", "Detección anticipada de riesgos", "Simulación de escenarios de negocio"],
                 impact: "Reducción de merma hasta un 10%",
                 img: "/predictive_chart.jpg"
               }
             ].map((caso, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={caso.img} 
                        alt={caso.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-daxum-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-daxum-navy mb-3">{caso.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{caso.desc}</p>
                      
                      <div className="space-y-3 mb-8">
                        {caso.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-daxum-blue shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base font-medium text-gray-700">{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <div className="bg-daxum-ice/50 rounded-xl p-4 border border-daxum-blue/10 flex flex-col justify-center min-h-[96px]">
                           <span className="block text-xs font-bold text-daxum-blue uppercase tracking-wider mb-1">Impacto Logrado</span>
                           <span className="text-daxum-navy font-bold leading-snug">{caso.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Process (DARK) */}
      <section id="proceso" className="relative py-24 bg-[#11203A] text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           {/* Subtle glow elements */}
           <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
           {/* Background Grid Lines (Abstract) */}
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading mb-6 text-white leading-tight">Nuestro proceso de trabajo</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">De diagnóstico a implementación, con foco en resultados medibles y soluciones listas para operar.</p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { step: "01", title: "Entendemos tu\noperación", desc: "Analizamos tus procesos, reportes, fuentes de datos y objetivos de negocio para identificar cómo fluye hoy la información." },
                { step: "02", title: "Detectamos\noportunidades", desc: "Ubicamos retrabajos, errores, fugas de tiempo y áreas donde los datos pueden generar mayor impacto operativo o financiero." },
                { step: "03", title: "Implementamos la\nsolución", desc: "Automatizamos procesos, integramos fuentes, construimos modelos de datos y validamos la información para asegurar resultados confiables." },
                { step: "04", title: "Entregamos y\ncapacitamos", desc: "Dejamos la solución documentada, lista para uso operativo y acompañamos a tu equipo para que pueda aprovecharla desde el primer día." }
              ].map((p, idx) => (
                 <FadeIn key={idx} delay={idx * 0.1} className="relative group">
                   {/* Connecting line between cards */}
                   {idx < 3 && (
                     <div className="hidden lg:block absolute top-14 left-[calc(100%-1rem)] w-[calc(100%+2rem)] h-[2px] bg-blue-500/30 z-0">
                       <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                     </div>
                   )}
                   <div className="bg-[#0A1128]/80 border border-blue-500/20 hover:border-blue-500/50 transition-all rounded-xl p-8 h-full relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                      <div className="mb-6">
                        <span className="text-2xl font-medium text-blue-400 font-heading">{p.step}</span>
                        <div className="w-6 h-0.5 bg-blue-500/80 mt-2"></div>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white mb-4 whitespace-pre-line leading-snug">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                   </div>
                 </FadeIn>
              ))}
            </div>
         </div>
      </section>

      {/* 8. Authority (LIGHT) */}
      <section className="relative py-24 bg-white text-daxum-navy overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>
           
           {/* Abstract shape top right */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] text-daxum-blue">
              <svg width="600" height="600" viewBox="0 0 400 400" fill="none">
                <path d="M100 80C50 80 20 110 20 160V240C20 290 50 320 100 320H160C210 320 240 290 240 240C240 190 210 160 160 160H120Z" stroke="currentColor" strokeWidth="60"/>
              </svg>
           </div>
           
           {/* Concentric circles bottom right */}
           <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-blue-500/10"></div>
           <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-blue-500/10"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-blue-500/10"></div>
           <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-blue-500/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="w-12 h-1 bg-blue-600 mb-8"></div>
                <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-daxum-navy mb-10 leading-[1.15] tracking-tight">
                  No diseñamos<br />dashboards aislados.<br />
                  <span className="text-blue-600">Diseñamos soluciones<br />para operar mejor.</span>
                </h2>
                
                <div className="relative pl-6 py-2">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-300">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </div>
                  
                  <p className="text-[1.05rem] text-gray-700 leading-relaxed mb-6 font-medium">
                    DAXUM nace desde la práctica en retail, centros de distribución, operaciones y control. Entendemos cómo se generan los datos, dónde se rompen los procesos y qué información necesita la dirección para tomar mejores decisiones.
                  </p>
                  <p className="text-[1.05rem] text-gray-700 leading-relaxed">
                    Cada solución se construye con enfoque operativo: entendiendo el proceso, validando la información y convirtiendo los datos en herramientas útiles para mejorar productividad, control y rentabilidad.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 sm:p-10 border border-gray-100">
                  <div className="w-10 h-0.5 bg-blue-600 mb-6"></div>
                  <h3 className="font-bold text-daxum-navy text-xl mb-8">Experiencia aplicada en:</h3>
                  <div className="space-y-0">
                    {[
                      "Retail y ecommerce",
                      "Centros de distribución",
                      "Operaciones y supply chain",
                      "Finanzas y control"
                    ].map((item, idx, arr) => (
                      <div key={idx} className={`py-4 flex items-center gap-4 ${idx !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="font-medium text-gray-700 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* 9. FAQ (DARK) */}
      <section id="faq" className="relative py-24 bg-[#11203A] text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
           {/* Abstract grid */}
           <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
           
           {/* Glows */}
           <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
           
           {/* Right side curve/lines */}
           <div className="absolute right-0 top-1/4 bottom-1/4 w-1/3 border-l border-white/5 rounded-l-full"></div>
           <div className="absolute right-0 top-1/3 bottom-1/3 w-1/4 border-l border-white/5 rounded-l-full"></div>
           
           {/* Sparkles/Dots */}
           <div className="absolute left-[10%] top-[20%] w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
           <div className="absolute left-[15%] top-[15%] w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
           <div className="absolute right-[10%] bottom-[30%] w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4 text-white tracking-tight">Preguntas Frecuentes</h2>
            </div>
          </FadeIn>

          <div className="relative p-5 sm:p-10 md:p-12 rounded-[2rem] border border-blue-400/20 bg-[#121D33]/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <div className="space-y-4">
              {[
                { q: "¿Necesito tener Power BI, bases de datos o sistemas avanzados?", a: "No. Podemos trabajar con las herramientas que ya utiliza tu empresa, incluso si hoy la información está en Excel, archivos compartidos, reportes manuales o sistemas internos. El primer paso es entender tus fuentes actuales y definir la mejor forma de convertirlas en información útil." },
                { q: "¿Qué tipo de empresas pueden trabajar con DAXUM?", a: "Trabajamos principalmente con pymes que buscan profesionalizar su operación con datos, pero también podemos apoyar a empresas medianas o grandes en proyectos específicos de automatización, dashboards, analítica, inteligencia comercial o modelos predictivos." },
                { q: "¿Cuánto tiempo toma implementar una solución?", a: "Depende del alcance, la cantidad de fuentes de datos y el nivel de automatización requerido. Una mejora puntual puede implementarse en pocos días o semanas; un proyecto más estratégico puede requerir varias etapas. Por eso iniciamos con un diagnóstico para definir prioridades y tiempos realistas." },
                { q: "¿Necesito tener un equipo técnico o de TI?", a: "No necesariamente. DAXUM puede acompañarte desde el diagnóstico hasta la implementación. Si tu empresa tiene equipo técnico, podemos trabajar con ellos; si no lo tiene, diseñamos una solución práctica y entendible para los usuarios del negocio." },
                { q: "¿Esto es solo para crear dashboards?", a: "No. Los dashboards son solo una parte de la solución. También ayudamos a automatizar reportes, integrar fuentes de datos, definir KPIs, analizar rentabilidad, proyectar ventas, detectar oportunidades comerciales y mejorar procesos operativos." },
                { q: "¿Qué pasa si no sé exactamente qué solución necesito?", a: "Es normal. Muchas empresas saben que tienen problemas con sus reportes o procesos, pero no tienen claro por dónde empezar. En el diagnóstico identificamos oportunidades, priorizamos el impacto y proponemos una ruta de trabajo según tus objetivos." },
                { q: "¿Pueden trabajar con información confidencial?", a: "Sí. La información del cliente se trata con confidencialidad y se utiliza únicamente para el desarrollo del proyecto. También podemos adaptarnos a políticas internas de acceso, seguridad y manejo de datos de cada empresa." },
                { q: "¿Qué entregan al finalizar el proyecto?", a: "Depende del tipo de solución, pero puede incluir dashboards, archivos automatizados, modelos de datos, documentación, capacitación y recomendaciones accionables. El objetivo es que la solución quede lista para operar y que tu equipo pueda utilizarla correctamente." }
              ].map((faq, idx) => (
                 <FadeIn key={idx} delay={idx * 0.05}>
                   <div className="bg-[#1A2642]/80 rounded-xl border border-blue-500/20 overflow-hidden hover:border-blue-500/40 hover:bg-[#1A2642] transition-colors shadow-lg shadow-black/20 group">
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-5 flex items-center justify-between font-medium text-left text-gray-100 hover:text-white transition-colors"
                      >
                        <span className="text-[1.05rem]">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-blue-400' : 'text-blue-500/60 group-hover:text-blue-400'}`} />
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                 </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Final (LIGHT) */}
      <section id="contacto" className="py-24 bg-gray-50 text-daxum-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6 tracking-tight text-daxum-navy">
              Detecta dónde estás perdiendo tiempo, dinero o control operativo
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Agenda un diagnóstico inicial y revisamos tu caso para identificar oportunidades de automatización, mejora de indicadores y toma de decisiones con mayor impacto.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="https://wa.me/526672095329" 
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-daxum-blue rounded-xl shadow-lg shadow-daxum-blue/30 hover:bg-blue-600 hover:scale-105 transition-all"
              >
                <Phone className="mr-2" size={20} />
                Agendar diagnóstico
              </a>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                <a href="mailto:contacto@daxum.com.mx" className="hover:text-daxum-navy font-medium transition-colors">
                  contacto@daxum.com.mx
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Sesión inicial para entender tu operación y detectar oportunidades concretas de mejora.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0B1021] text-gray-400 py-8 overflow-hidden">
        {/* Background decorative stuff */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           {/* Abstract grid */}
           <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 mb-8">
            
            {/* Left Column (Logo & Description) */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start pr-8 lg:border-r border-white/5">
              <div className="mb-4">
                <DaxumLogoWhite />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Consultoría de datos, automatización e inteligencia de negocio para empresas que buscan mejorar su operación, rentabilidad y toma de decisiones.
              </p>
            </div>
            
            {/* Middle Column (Soluciones) */}
            <div className="md:col-span-6 lg:col-span-4 lg:px-8 lg:border-r border-white/5">
              <div className="mb-4">
                <h4 className="text-white text-lg font-medium mb-2">Soluciones</h4>
                <div className="w-8 h-0.5 bg-blue-600"></div>
              </div>
              
              <ul className="flex flex-col">
                {[
                  { text: "Automatización de reportes", href: "#soluciones" },
                  { text: "Dashboards e inteligencia de negocio", href: "#soluciones" },
                  { text: "Inteligencia comercial y de mercado", href: "#soluciones" },
                  { text: "Analítica predictiva y proyectos de impacto", href: "#soluciones" }
                ].map((item, idx, arr) => (
                  <li key={idx} className={`py-2 ${idx !== arr.length - 1 ? 'border-b border-white/5' : ''}`}>
                    <a href={item.href} className="flex items-center gap-4 group">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)] group-hover:bg-blue-400 transition-colors"></span>
                      <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column (Contacto) */}
            <div className="md:col-span-6 lg:col-span-4 lg:pl-8">
              <div className="mb-4">
                <h4 className="text-white text-lg font-medium mb-2">Contacto</h4>
                <div className="w-8 h-0.5 bg-blue-600"></div>
              </div>
              
              <ul className="flex flex-col">
                <li className="py-2 border-b border-white/5">
                  <a href="https://wa.me/526672095329" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full border border-blue-900/40 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors bg-[#0A1128]/50">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-blue-400">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    </div>
                    WhatsApp: +52 667 209 53 29
                  </a>
                </li>
                <li className="py-2 border-b border-white/5">
                  <a href="mailto:contacto@daxum.com.mx" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full border border-blue-900/40 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors bg-[#0A1128]/50">
                      <Mail size={14} className="text-blue-400" />
                    </div>
                    Correo: contacto@daxum.com.mx
                  </a>
                </li>
                <li className="py-2 border-b border-white/5 lg:border-none">
                  <span className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="w-8 h-8 rounded-full border border-blue-900/40 flex items-center justify-center shrink-0 bg-[#0A1128]/50">
                      <Globe size={14} className="text-blue-400" />
                    </div>
                    Atención remota en México y LATAM
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Bottom Copyright */}
          <div className="relative pt-4 pb-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/5 h-[2px] bg-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
            
            <div className="flex items-center justify-between text-[13px] text-gray-400">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <div className="flex-1 text-center sm:text-left sm:ml-4">
                © {new Date().getFullYear()} DAXUM Data Intelligence. Todos los derechos reservados.
              </div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
