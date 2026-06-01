import { useState, useEffect, useRef } from "react";
import LegalPage from "./LegalPage";
import { projectId, publicAnonKey } from '/utils/supabase/info';
import svgPaths from "@/imports/Desktop2/svg-0h0tg7i041";
import imgRectangle1 from "../../imports/Desktop2/0660338ec10f60477e43bcfc8560dd7c7d458bf7.webp";
import imgPhone from "../../imports/image_2-1.webp";
import imgFeature1 from "../../imports/Group_41.webp";
import imgFeature2 from "../../imports/Group_42.webp";
import imgFeature3 from "../../imports/Group_43.webp";
import imgFeature4 from "../../imports/Group_44.webp";
import imgJgLogo from "../../imports/Desktop2/37a2f022f240cc50e16f7da1e1f20e83dc5c0761.webp";
import imgStartupTeens from "../../imports/Desktop2/cbe18b8b2fa6bbf9cbdfa09840c4d1a1db37ea1d.webp";
import { translations, type Language } from "../../imports/Desktop1-1/translations";

function LogoWhite() {
  return (
    <div className="h-[20px] w-[88px]">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.8063 20.7115">
        <g clipPath="url(#mob-clip)">
          <path d={svgPaths.p233e3ec0} fill="white" />
          <path d={svgPaths.p27f039e0} fill="white" />
          <path d={svgPaths.p1530d380} fill="white" />
          <path d={svgPaths.p5b98880} fill="white" />
          <path d={svgPaths.p1df5e580} fill="white" />
          <path d={svgPaths.p19310c80} fill="white" />
        </g>
        <defs>
          <clipPath id="mob-clip">
            <rect fill="white" height="20.7115" width="87.8063" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoDark() {
  return (
    <div className="h-[24px] w-[97px]">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.003 31.0003">
        <g>
          <path d={svgPaths.p30156080} fill="#0F2301" />
          <path d={svgPaths.p11d47e20} fill="#0F2301" />
          <path d={svgPaths.p72c9ce0} fill="#0F2301" />
          <path d={svgPaths.p32ede880} fill="#0F2301" />
          <path d={svgPaths.p2d191b00} fill="#0F2301" />
          <path d={svgPaths.p2993ad00} fill="#0F2301" />
        </g>
      </svg>
    </div>
  );
}

function CampusFoundersLogo() {
  return (
    <svg className="w-[115px] h-[26px]" fill="none" viewBox="0 0 229 52">
      <g>
        <g>
          <path d={svgPaths.p2dee0100} fill="black" />
          <path d={svgPaths.p2865b200} fill="black" />
          <path d={svgPaths.p2ebe44c0} fill="black" />
          <path d={svgPaths.p2c1f59f0} fill="black" />
          <path d={svgPaths.p215aad80} fill="black" />
          <path d={svgPaths.p1e5ab300} fill="black" />
          <path d={svgPaths.p39a3fe00} fill="black" />
          <path d={svgPaths.p2c5ed600} fill="black" />
          <path d={svgPaths.p15449b40} fill="black" />
          <path d={svgPaths.pef15980} fill="black" />
          <path d={svgPaths.p2c8cce70} fill="black" />
          <path d={svgPaths.p32aaaf00} fill="black" />
          <path d={svgPaths.p150e0b00} fill="black" />
          <path d={svgPaths.p37261d00} fill="black" />
        </g>
        <path d={svgPaths.p34d9c380} fill="#BBCE32" />
      </g>
    </svg>
  );
}

function LogoCarousel({ imgJg, imgSt }: { imgJg: string; imgSt: string }) {
  const logos = [
    <img key="jg" alt="Jugend Gründet" className="h-[68px] w-auto object-contain" src={imgJg} />,
    <div key="cf" className="flex items-center justify-center scale-[1.4]"><CampusFoundersLogo /></div>,
    <img key="st" alt="Startup Teens" className="h-[72px] w-auto object-contain" src={imgSt} />,
  ];
  const total = logos.length;
  const [current, setCurrent] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const isResetting = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isResetting.current) {
        setEnableTransition(true);
        setCurrent(c => c + 1);
      }
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === total) {
      const t = setTimeout(() => {
        isResetting.current = true;
        setEnableTransition(false);
        setCurrent(0);
        setTimeout(() => { isResetting.current = false; }, 50);
      }, 680);
      return () => clearTimeout(t);
    }
  }, [current, total]);

  return (
    <div className="overflow-hidden w-full py-[40px]">
      <div
        className="flex items-center"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: enableTransition ? 'transform 0.68s cubic-bezier(0.45, 0, 0.55, 1)' : 'none',
        }}
      >
        {[...logos, logos[0]].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-full flex justify-center items-center h-[80px]">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MobileDesign() {
  const [page, setPage] = useState<'home' | 'impressum' | 'datenschutz'>('home');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('de');
  const t = translations[currentLanguage];

  const [heroEmail, setHeroEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (email: string, setter: (v: string) => void) => {
    if (!email) return;
    setSubmitStatus('loading');
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-629e5ff1/register-email`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) throw new Error(await res.text());
      setter('');
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (err) {
      console.error('Fehler beim Senden:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'En' },
    { code: 'es', label: 'Es' },
    { code: 'fr', label: 'Fr' },
    { code: 'de', label: 'De' },
  ];

  const features = [
    { title: t.features.feature1.title, desc: t.features.feature1.description, img: imgFeature1, objPos: '50% 22%' },
    { title: t.features.feature2.title, desc: t.features.feature2.description, img: imgFeature2, objPos: '50% 22%' },
    { title: t.features.feature3.title, desc: t.features.feature3.description, img: imgFeature3, objPos: '50% 22%' },
    { title: t.features.feature4.title, desc: t.features.feature4.description, img: imgFeature4, objPos: '50% 22%' },
  ];

  if (page !== 'home') {
    return <LegalPage type={page} onBack={() => setPage('home')} />;
  }

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative mx-[20px] mt-[20px] mb-[20px] rounded-[19px] overflow-hidden h-[calc(100vh-40px)]">
        <div className="absolute inset-0 overflow-hidden rounded-[19px] pointer-events-none">
          <img alt="" className="absolute h-full max-w-none top-0" style={{ width: '310.1%', left: '-55.14%' }} src={imgRectangle1} fetchPriority="high" decoding="async" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-[31px] pt-[44px]">
          <LogoWhite />
          <button
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#95e80f] h-[34px] rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] flex items-center px-[22px] cursor-pointer"
          >
            <span className="font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] leading-[12px]">{t.nav.contact}</span>
          </button>
        </div>

        {/* Title */}
        <div className="relative z-10 mt-[55px] text-center px-4">
          <h1 className="font-['Gilroy:ExtraBold',sans-serif] text-[65px] leading-[60px] text-white whitespace-pre-line">
            {t.hero.title}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="relative z-10 mt-[35px] font-['Montserrat:SemiBold',sans-serif] text-[15px] leading-[20px] text-center text-white px-[28px]">
          {t.hero.subtitle}
        </p>

        {/* Email Form */}
        <div className="relative z-10 mt-[35px] mx-[28px]">
          <div className="relative bg-[rgba(217,217,217,0.2)] backdrop-blur-md h-[58px] rounded-[29px] flex items-center px-6">
            <input
              type="email"
              placeholder={t.hero.emailPlaceholder}
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
              className="border-none outline-none text-white placeholder-white font-['Montserrat:SemiBold',sans-serif] text-[15px] flex-1 min-w-0 bg-[#03030300]"
            />
            <button
              onClick={() => handleSubmit(heroEmail, setHeroEmail)}
              disabled={submitStatus === 'loading'}
              className="absolute right-2 top-2 bg-[#95e80f] h-[42px] px-5 rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] cursor-pointer disabled:opacity-60 whitespace-nowrap"
            >
              {submitStatus === 'loading' ? '...' : t.hero.button}
            </button>
          </div>
          {submitStatus === 'success' && <p className="mt-2 text-[#95e80f] font-['Montserrat:SemiBold',sans-serif] text-[12px] text-center">Danke! Du wirst benachrichtigt.</p>}
          {submitStatus === 'error' && <p className="mt-2 text-red-400 font-['Montserrat:SemiBold',sans-serif] text-[12px] text-center">Fehler – bitte erneut versuchen.</p>}
        </div>

        {/* Phone image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[234px]">
          <img alt="App Screenshot" className="w-full block" src={imgPhone} fetchPriority="high" decoding="async" />
        </div>
      </div>

      {/* Features Section */}
      <div className="px-[24px] pt-[60px] pb-[20px]">
        <h2 className="font-['Montserrat:Bold',sans-serif] text-[40px] leading-[40px] text-center text-[#0f2301] whitespace-pre-line mb-[24px]">
          {t.features.title}
        </h2>
        <p className="font-['Montserrat:SemiBold',sans-serif] text-[15px] leading-[20px] text-center text-[#878a83] mb-[40px] px-4">
          {t.features.subtitle.split('Nummer 1').length > 1 ? (
            <>
              {t.features.subtitle.split('Nummer 1')[0]}
              <span className="font-['Montserrat:Bold',sans-serif]">Nummer 1</span>
              {t.features.subtitle.split('Nummer 1')[1]}
            </>
          ) : t.features.subtitle}
        </p>

        {/* Feature Cards */}
        <div className="flex flex-col gap-[16px]">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#f7f7f7] rounded-[22px] h-[352px] relative overflow-hidden">
              <img
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: feature.objPos }}
                src={feature.img}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f7f7f7] to-[65%] pointer-events-none" />
              <div className="absolute bottom-[32px] left-0 right-0 text-center px-6 z-10">
                <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[18px] leading-[30px] text-[#0f2301] mb-[4px]">
                  {feature.title}
                </h3>
                <p className="font-['Montserrat:SemiBold',sans-serif] text-[13px] leading-[18px] text-[#878a83]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos Carousel */}
      <LogoCarousel imgJg={imgJgLogo} imgSt={imgStartupTeens} />

      {/* Contact Section */}
      <div id="contact-section" className="mx-[24px] mb-[40px]">
        <div className="bg-[#f7f7f7] rounded-[22px] px-[24px] pt-[40px] pb-[28px]">
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[22px] leading-[1.2] text-[#0f2301] text-center mb-[16px]">
            {t.contact.title}
          </h2>
          <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#878a83] text-center mb-[24px]">
            {t.contact.subtitle}
          </p>
          <div className="relative bg-white h-[58px] rounded-[29px] flex items-center px-5">
            <input
              type="email"
              placeholder={t.contact.emailPlaceholder}
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="bg-transparent border-none outline-none text-[#0f2301] placeholder-[#0f2301] font-['Montserrat:SemiBold',sans-serif] text-[15px] flex-1 min-w-0"
            />
            <button
              onClick={() => handleSubmit(contactEmail, setContactEmail)}
              disabled={submitStatus === 'loading'}
              className="absolute right-2 top-2 bg-[#95e80f] h-[42px] px-5 rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] cursor-pointer disabled:opacity-60 whitespace-nowrap"
            >
              {submitStatus === 'loading' ? '...' : t.contact.button}
            </button>
          </div>
          {submitStatus === 'success' && <p className="mt-2 text-[#0f2301] font-['Montserrat:SemiBold',sans-serif] text-[12px] text-center">Danke! Wir melden uns.</p>}
          {submitStatus === 'error' && <p className="mt-2 text-red-500 font-['Montserrat:SemiBold',sans-serif] text-[12px] text-center">Fehler – bitte erneut versuchen.</p>}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#f7f7f7] pt-[60px] pb-[48px] px-[24px]">
        {/* Logo centered */}
        <div className="flex justify-center mb-[48px]">
          <LogoDark />
        </div>

        <div className="flex justify-between items-start">
          {/* Contact + Office */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[14px]">
              <p className="font-['Montserrat:Bold',sans-serif] text-[18px] leading-[1.1] text-black tracking-[-0.2px]">
                {t.footer.contactTitle}
              </p>
              <div className="font-['Montserrat:SemiBold',sans-serif] text-[13px] leading-[1.6] text-[#878a83]">
                
                <p>info@fasher.de</p>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              
              
            </div>
          </div>

          {/* Languages + Legal */}
          <div className="flex flex-col gap-[14px] items-end">
            <p className="font-['Montserrat:Bold',sans-serif] text-[13px] leading-[1.4] text-[#0f2301]">
              {t.footer.languages}
            </p>
            <div className="flex flex-wrap justify-end gap-[14px] font-['Montserrat:SemiBold',sans-serif] text-[13px] leading-[1.6]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang.code)}
                  className={`cursor-pointer transition-colors ${
                    currentLanguage === lang.code ? 'text-black' : 'text-[#878a83]'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-end gap-[8px] mt-[12px] font-['Montserrat:SemiBold',sans-serif] text-[13px] leading-[1.6]">
              <button onClick={() => setPage('impressum')} className="text-[#878a83] cursor-pointer hover:text-[#0f2301] transition-colors">
                Impressum
              </button>
              <button onClick={() => setPage('datenschutz')} className="text-[#878a83] cursor-pointer hover:text-[#0f2301] transition-colors">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
