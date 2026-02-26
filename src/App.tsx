import { useState } from 'react';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    { img: '/img2/Gemini_Generated_Image_3sb2sn3sb2sn3sb2.png', title: 'Projeto Especial', desc: 'Design Único' },
    { img: '/img2/Gemini_Generated_Image_6hy6kr6hy6kr6hy6.png', title: 'Marcenaria Fina', desc: 'Detalhes Exclusivos' },
    { img: '/img2/Gemini_Generated_Image_axsbp9axsbp9axsb.png', title: 'Ambiente Planejado', desc: 'Sofisticação' },
    { img: '/img2/Gemini_Generated_Image_azge0nazge0nazge.png', title: 'Móvel Sob Medida', desc: 'Alta Qualidade' },
    { img: '/img2/Gemini_Generated_Image_c30qxec30qxec30q.png', title: 'Design de Interiores', desc: 'Beleza e Conforto' },
    { img: '/img2/Gemini_Generated_Image_rycb4frycb4frycb.png', title: 'Acabamento Premium', desc: 'Excelente Durabilidade' },
    { img: '/img2/unnamed.jpg', title: 'Projeto Personalizado', desc: 'Feito para Você' },
    { img: '/uploads/projeto-sala-estar.jpeg', title: 'Sala de Estar Shekiná', desc: 'Buffet e Painel Sob Medida' },
    { img: '/img2/sala_planejada.jpg', title: 'Sala Planejada', desc: 'Conforto e Elegância' },
  ];

  const visibleProjects = showMoreProjects ? projects : projects.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-bg-light py-6 px-4 md:px-8 border-b border-wood-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center rounded-full border-[1.5px] border-wood-800">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-wood-800">
                <path d="M12 22v-8" />
                <path d="M12 14c-2.5-2.5-2-6-2-6s1.5-1 3-1 3 1 3 1 .5 3.5-2 6" />
                <path d="M10 10c-2-1.5-4-1-4-1s-1 2-1 3 2 3 4 3" />
                <path d="M14 10c2-1.5 4-1 4-1s1 2 1 3-2 3-4 3" />
                <path d="M12 6c-1.5-2-3-2-3-2s-1 1.5-1 3" />
                <path d="M12 6c1.5-2 3-2 3-2s1 1.5 1 3" />
                <path d="M9 22c1-1.5 2-1.5 3-1.5s2 0 3 1.5" />
              </svg>
              <div className="absolute -bottom-1 -right-2 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-wood-800 rounded-br-full transform rotate-12"></div>
            </div>
            <div className="text-center">
              <h1 className="font-heading text-xl md:text-2xl tracking-[0.2em] text-wood-900 uppercase font-medium leading-none">
                Shekiná
              </h1>
              <span className="font-cursive text-2xl md:text-3xl text-wood-700 leading-none -mt-1 block">
                planejados
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-wood-700 hover:text-wood-950 active:text-wood-950 transition-all font-medium text-sm tracking-wide uppercase underline-offset-8 hover:underline decoration-wood-950 decoration-2">Início</a>
            <a href="#sobre" className="text-wood-700 hover:text-wood-950 active:text-wood-950 transition-all font-medium text-sm tracking-wide uppercase underline-offset-8 hover:underline decoration-wood-950 decoration-2">Sobre</a>
            <a href="#portfolio" className="text-wood-700 hover:text-wood-950 active:text-wood-950 transition-all font-medium text-sm tracking-wide uppercase underline-offset-8 hover:underline decoration-wood-950 decoration-2">Portfólio</a>
            <a href="#contato" className="bg-wood-950 text-bg-light px-6 py-2.5 rounded-sm hover:bg-wood-900 transition-colors font-medium text-sm tracking-wide uppercase">
              Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-wood-900" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-bg-light border-b border-wood-100 py-4 px-4 flex flex-col space-y-4 shadow-lg">
            <a href="#home" onClick={toggleMenu} className="text-wood-800 font-medium py-2 border-b border-wood-50">Início</a>
            <a href="#sobre" onClick={toggleMenu} className="text-wood-800 font-medium py-2 border-b border-wood-50">Sobre</a>
            <a href="#portfolio" onClick={toggleMenu} className="text-wood-800 font-medium py-2 border-b border-wood-50">Portfólio</a>
            <a href="#contato" onClick={toggleMenu} className="text-wood-800 font-medium py-2">Contato</a>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Ambiente planejado elegante"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-wood-900/40"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6 drop-shadow-lg">
              A essência da <br /><span className="font-medium">marcenaria fina</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
              Do corte preciso ao acabamento impecável, fabricamos sob medida com paixão e excelência.
            </p>
            <a href="#portfolio" className="inline-flex items-center justify-center bg-white text-wood-900 px-8 py-4 rounded-sm hover:bg-wood-50 transition-colors font-medium tracking-wide uppercase text-sm group">
              Ver Projetos
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 md:py-32 px-4 bg-bg-light">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Detalhe de marcenaria"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square overflow-hidden rounded-sm border-8 border-bg-light hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Textura de madeira"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="font-cursive text-3xl md:text-4xl text-wood-600 mb-2">Nossa Essência</h3>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-900 mb-6 font-light">
                A Arte da <span className="font-medium">Marcenaria</span>
              </h2>
              <div className="w-16 h-1 bg-wood-400 mb-8"></div>
              <p className="text-wood-700 mb-6 leading-relaxed">
                A Shekiná é uma marcenaria autêntica, onde o cheiro da serragem e a paixão pela madeira se unem. Nosso ofício é transformar chapas cruas e MDF em mobiliário robusto, funcional e com cuidado artesanal em cada detalhe.
              </p>
              <p className="text-wood-700 mb-8 leading-relaxed">
                Utilizamos materiais de altíssima qualidade, ferragens de última geração e um acabamento impecável. Cada projeto é único, pensado exclusivamente para atender às suas necessidades, estilo e sonhos.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold text-wood-900 text-lg mb-2">100% MDF</h4>
                  <p className="text-sm text-wood-600">Garantia de durabilidade e resistência em todos os projetos.</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-wood-900 text-lg mb-2">Sob Medida</h4>
                  <p className="text-sm text-wood-600">Aproveitamento total do espaço com design exclusivo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 md:py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="font-cursive text-3xl md:text-4xl text-wood-600 mb-2">Marcenaria Fina</h3>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-900 font-light">
                Móveis <span className="font-medium">Executados</span>
              </h2>
              <div className="w-16 h-1 bg-wood-400 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/90 via-wood-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h4 className="font-heading text-white text-xl font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
                    <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {!showMoreProjects && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setShowMoreProjects(true)}
                  className="border border-wood-800 text-wood-900 px-8 py-3 rounded-sm hover:bg-wood-800 hover:text-white transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Carregar Mais Projetos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wood-800 text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 font-light">Pronto para transformar seu ambiente?</h2>
            <p className="text-wood-100 mb-10 text-lg">
              Agende uma visita técnica ou envie sua planta para um orçamento sem compromisso.
            </p>
            <a href="https://wa.me/5585985932279" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#20bd5a] transition-colors font-medium tracking-wide uppercase text-sm">
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-wood-900 text-wood-100 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex flex-col items-start mb-6">
              <h2 className="font-heading text-2xl tracking-[0.2em] text-white uppercase font-medium leading-none">
                Shekiná
              </h2>
              <span className="font-cursive text-3xl text-wood-300 leading-none -mt-1 block">
                planejados
              </span>
            </div>
            <p className="text-wood-300 leading-relaxed mb-6 max-w-sm">
              Marcenaria especializada em móveis sob medida de alto padrão. Qualidade, design e compromisso com o seu sonho.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg font-medium mb-6 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-wood-400 shrink-0 mt-1" />
                <span className="text-wood-300">Rua Professor Francisco Carlos 1172 - Bairro São Bento<br />Fortaleza - CE, 60.875-810</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-wood-400 shrink-0" />
                <span className="text-wood-300">(85) 98593-2279</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-wood-400 shrink-0" />
                <span className="text-wood-300">Keltonpcr@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg font-medium mb-6 uppercase tracking-wider">Horário de Atendimento</h4>
            <ul className="space-y-2 text-wood-300">
              <li className="flex justify-between border-b border-wood-800 pb-2">
                <span>Segunda - Sexta</span>
                <span>07:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-wood-800 pb-2 pt-2">
                <span>Sábado</span>
                <span>07:00 - 12:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-wood-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-wood-400 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Shekiná Planejados. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 54.244.032/0001-61</p>
          </div>
          <p>Desenvolvido com excelência.</p>
        </div>
      </footer>

      {/* Fullscreen Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="fixed top-6 right-6 text-white hover:text-wood-300 transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white hover:text-wood-300 transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev === null || prev === 0 ? visibleProjects.length - 1 : prev - 1));
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 md:right-8 text-white hover:text-wood-300 transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev === null || prev === visibleProjects.length - 1 ? 0 : prev + 1));
            }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-7xl w-full h-full flex items-center justify-center p-4">
            <img
              src={visibleProjects[selectedIndex].img}
              alt="Projeto em tela cheia"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
