import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Globe, 
  Terminal, 
  Cpu, 
  Database, 
  Shield, 
  Code, 
  ChevronRight, 
  Menu, 
  X, 
  Share2, 
  Layers, 
  Zap 
} from 'lucide-react';
import { Content } from './constants';
import { Lang, Nav } from './types';

const IconMap = {
  Database,
  Cpu,
  Shield,
  Zap,
  Share2
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const t = Content[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');
  const toggleTheme = () => setDarkMode(prev => !prev);

  // Helper to safely get icon component
  const getIcon = (iconName: keyof typeof IconMap) => {
    return IconMap[iconName];
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-[#0a0f1c] text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-[#0a0f1c]/80 border-cyan-900/30' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Terminal className={`h-8 w-8 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <span className={`font-mono font-bold text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                TWIN3<span className="text-cyan-500">_PROTOCOL</span>
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
                {(Object.keys(t.nav) as Array<keyof Nav>).map((key) => (
                   key !== 'register' && <a key={key} href={`#${key}`} className="hover:text-cyan-500 transition-colors cursor-pointer uppercase tracking-wide opacity-80 hover:opacity-100">{t.nav[key]}</a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button onClick={toggleLang} className={`flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-bold transition-all ${darkMode ? 'border-cyan-900 hover:bg-cyan-900/30 text-slate-300' : 'border-slate-300 hover:bg-slate-100 text-slate-600'}`}>
                <Globe size={14} /> {lang === 'zh' ? 'EN' : '中文'}
              </button>
              <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-slate-200 text-slate-600'}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-sm font-mono text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)]">
                {t.nav.register}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className={`p-2 rounded-full ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}>
                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute w-full border-b shadow-xl ${darkMode ? 'bg-[#0a0f1c] border-cyan-900/30' : 'bg-white border-slate-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {(Object.keys(t.nav) as Array<keyof Nav>).map((key) => (
                <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-cyan-500 transition-colors">{t.nav[key]}</a>
              ))}
              <div className="flex items-center justify-between px-3 py-4 border-t border-gray-700/50 mt-4">
                 <button onClick={toggleLang} className="flex items-center gap-2 font-bold"><Globe size={16} /> {lang === 'zh' ? 'Switch to English' : '切換至中文'}</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Grid */}
        <div className={`absolute inset-0 z-0 ${darkMode ? 'opacity-20' : 'opacity-5'}`} style={{ 
          backgroundImage: 'linear-gradient(to right, #0891b2 1px, transparent 1px), linear-gradient(to bottom, #0891b2 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className={`absolute inset-0 z-0 bg-gradient-to-b ${darkMode ? 'from-transparent via-[#0a0f1c]/80 to-[#0a0f1c]' : 'from-transparent via-slate-50/80 to-slate-50'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 text-xs font-mono ${darkMode ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-700'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t.hero.edition}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
             <span className="block">{t.hero.title}</span>
             <span className={`block text-3xl md:text-4xl mt-4 font-normal font-mono ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.hero.subtitle}</span>
          </h1>
          
          <p className={`mt-4 max-w-2xl mx-auto text-xl mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold text-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.6)] hover:shadow-[0_0_30px_rgba(8,145,178,0.8)] flex items-center justify-center gap-2 group">
              {t.hero.cta} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`px-8 py-4 rounded font-bold text-lg border transition-all flex items-center justify-center gap-2 ${darkMode ? 'border-slate-700 hover:border-slate-500 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}>
              <Code size={20} /> {t.hero.secondary}
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-[#0d1221]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-sm font-mono font-bold tracking-widest uppercase mb-2 ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.overview.subtitle}</h2>
            <h3 className="text-3xl font-bold">{t.overview.title}</h3>
          </div>
          <div className={`prose prose-lg mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <p className="mb-6 leading-relaxed">
              {t.overview.content1}
            </p>
            <p className={`p-6 border-l-4 rounded-r ${darkMode ? 'bg-slate-800/50 border-cyan-500 text-slate-300' : 'bg-slate-50 border-cyan-600 text-slate-700'} font-medium italic`}>
              {t.overview.content2}
            </p>
          </div>
        </div>
      </section>

      {/* Build to Earn Section */}
      <section id="mechanism" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className={`text-sm font-mono font-bold tracking-widest uppercase mb-2 ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.mechanism.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.mechanism.title}</h3>
            <p className={`max-w-2xl text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t.mechanism.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.mechanism.cards.map((card, idx) => {
              const Icon = getIcon(card.icon);
              return (
                <div key={idx} className={`p-8 rounded-xl border transition-all duration-300 group hover:-translate-y-2 ${darkMode ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-400'}`}>
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${darkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                  <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className={`py-20 border-y ${darkMode ? 'border-slate-800 bg-[#0d1221]' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className={`text-sm font-mono font-bold tracking-widest uppercase mb-2 ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.tracks.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">{t.tracks.title}</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {t.tracks.list.map((track, idx) => {
              const Icon = getIcon(track.icon);
              return (
                <div key={idx} className={`relative p-8 rounded-xl border overflow-hidden group ${darkMode ? 'bg-[#0a0f1c] border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className={`absolute top-0 right-0 p-4 font-mono text-4xl font-bold opacity-10 select-none ${darkMode ? 'text-white' : 'text-black'}`}>
                    {track.id}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${darkMode ? 'bg-cyan-950 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                    {track.tag}
                  </div>
                  <div className="mb-6">
                    <Icon className={`h-10 w-10 mb-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <h4 className="text-xl font-bold mb-2">{track.name}</h4>
                    <span className={`block text-sm font-mono mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{track.goal}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {track.desc}
                  </p>
                  <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                     <button className={`text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                       Explore Track <ChevronRight size={14} />
                     </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech & Submission (Combined for layout) */}
      <section id="specs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tech Specs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layers className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                <h3 className="text-2xl font-bold">{t.tech.api_title}</h3>
              </div>
              <div className={`p-6 rounded-lg border mb-6 font-mono text-sm ${darkMode ? 'bg-black border-slate-800 text-green-400' : 'bg-slate-900 border-slate-800 text-green-400'}`}>
                {`[ [ "HexValue", "HexValue" ], ..., [ "HexValue", "HexValue" ] ]`}
              </div>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.tech.api_desc}
              </p>
            </div>

            {/* Submission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className={darkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                <h3 className="text-2xl font-bold">{t.tech.submission_title}</h3>
              </div>
              <ul className={`space-y-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 block h-2 w-2 rounded-full ${darkMode ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
                  <span><strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>Web App:</strong> Frontend + Backend + Dockerfile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 block h-2 w-2 rounded-full ${darkMode ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
                  <span><strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>IoT:</strong> Firmware + Connector Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`mt-1 block h-2 w-2 rounded-full ${darkMode ? 'bg-cyan-500' : 'bg-cyan-600'}`}></span>
                  <span><strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>Extensions:</strong> Manifest V3 Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section id="criteria" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-[#0d1221]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-sm font-mono font-bold tracking-widest uppercase mb-2 ${darkMode ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.criteria.subtitle}</h2>
            <h3 className="text-3xl font-bold">{t.criteria.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {t.criteria.items.map((item, idx) => (
               <div key={idx} className={`p-6 rounded-lg border flex flex-col justify-between ${darkMode ? 'bg-[#0a0f1c] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <h4 className="text-lg font-bold">{item.label}</h4>
                     <span className={`font-mono text-xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{item.weight}</span>
                   </div>
                   <div className={`h-1 w-full rounded-full mb-4 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                     <div className={`h-full rounded-full ${darkMode ? 'bg-cyan-600' : 'bg-cyan-500'}`} style={{width: item.weight}}></div>
                   </div>
                   <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t text-sm ${darkMode ? 'border-slate-800 bg-[#05080f] text-slate-500' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <Terminal size={16} />
             <span>{t.footer.code}</span>
          </div>
          <div className="text-center md:text-right">
            {t.footer.rights}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;