import image_ChatGPT_Image_16__Mai_2026__21_43_51__1__1_1 from '@/imports/ChatGPT_Image_16._Mai_2026__21_43_51__1__1-1.png'
import image_Group_37_3 from '@/imports/Group_37-3.webp'
import imgHeroDesktop from '@/imports/e83c70c88d0eedfa2725e60904bf87b0b8e16bd2a8a76165642cc287f0a2115f.webp'
import imgPhone from '@/imports/image_2-1.webp'
import image_Group_37_2 from '@/imports/Group_37-2.png'
import image_Group_38_3 from '@/imports/Group_38-3.webp'
import image_Group_39_3 from '@/imports/Group_39-3.webp'
import image_Group_40_3 from '@/imports/Group_40-3.webp'
import { useState } from "react";
import LegalPage from "../../app/components/LegalPage";
import { projectId, publicAnonKey } from '/utils/supabase/info';
import svgPaths from "./svg-ogf86e5a5c";
import imgRectangle1 from "./0660338ec10f60477e43bcfc8560dd7c7d458bf7.webp";
import imgChatGptImage16Mai202621435111 from "./937bfb5955382d125d93c4ba1a3c0d0cad9c8248.webp";
import imgPhoneMask from "../MaskGroup/f270dc9e98d9f5be21d762c7a7d082f53cda9728.webp";
import imgPhoneContent from "../MaskGroup/572cf5b75e13ac87f8c68efafb36e9cac7a7eb07.png";
import imgGroup37 from "../Group_37-1.png";
import imgGroup38 from "../Group_38-1.png";
import imgGroup39 from "../Group_39-1.png";
import imgGroup40 from "../Group_40-1.png";
import imgJgLogo from "../JG_Logo_de_RGB_72dpi-2.JPG";
import imgStartupTeensLogo from "../startup-teens-vector-logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { translations, type Language } from "./translations";

function Logo() {
  return (
    <div className="h-[21px] w-[85px]" data-name="logo 1">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.0024 21.0002">
        <g id="Gruppe 12">
          <path d={svgPaths.p233e3ec0} fill="var(--fill-0, white)" id="Pfad 1093" />
          <path d={svgPaths.p2b808180} fill="var(--fill-0, white)" id="Pfad 1094" />
          <path d={svgPaths.pfc33040} fill="var(--fill-0, white)" id="Pfad 1095" />
          <path d={svgPaths.p98abc00} fill="var(--fill-0, white)" id="Pfad 1096" />
          <path d={svgPaths.p1a13c800} fill="var(--fill-0, white)" id="Pfad 1097" />
          <path d={svgPaths.p22fde900} fill="var(--fill-0, white)" id="Pfad 1098" />
        </g>
      </svg>
    </div>
  );
}

function CampusFoundersLogoLight() {
  return (
    <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 229 52">
      <g id="CampusFounders-logo-light-1 1">
        <g id="Group">
          <path d={svgPaths.p2dee0100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2865b200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2ebe44c0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p2c1f59f0} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p215aad80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1e5ab300} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p39a3fe00} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p2c5ed600} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p15449b40} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.pef15980} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p2c8cce70} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p32aaaf00} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p150e0b00} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p37261d00} fill="var(--fill-0, black)" id="Vector_14" />
        </g>
        <path d={svgPaths.p34d9c380} fill="var(--fill-0, #BBCE32)" id="Vector_15" />
      </g>
    </svg>
  );
}

function Logo1() {
  return (
    <div className="h-[21px] w-[85px]" data-name="logo 2">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.0024 21.0002">
        <g id="Gruppe 12">
          <path d={svgPaths.p233e3ec0} fill="var(--fill-0, #0F2301)" id="Pfad 1093" />
          <path d={svgPaths.p2b808180} fill="var(--fill-0, #0F2301)" id="Pfad 1094" />
          <path d={svgPaths.pfc33040} fill="var(--fill-0, #0F2301)" id="Pfad 1095" />
          <path d={svgPaths.p98abc00} fill="var(--fill-0, #0F2301)" id="Pfad 1096" />
          <path d={svgPaths.p1a13c800} fill="var(--fill-0, #0F2301)" id="Pfad 1097" />
          <path d={svgPaths.p22fde900} fill="var(--fill-0, #0F2301)" id="Pfad 1098" />
        </g>
      </svg>
    </div>
  );
}

export default function Desktop() {
  const [page, setPage] = useState<'home' | 'impressum' | 'datenschutz'>('home');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('de');
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
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${publicAnonKey}` },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) throw new Error(await res.text());
      setter('');
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (err) {
      console.error('Fehler beim Senden der E-Mail-Registrierung:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };
  const t = translations[currentLanguage];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'En' },
    { code: 'es', label: 'Es' },
    { code: 'fr', label: 'Fr' },
    { code: 'de', label: 'De' },
  ];

  if (page !== 'home') {
    return <LegalPage type={page} onBack={() => setPage('home')} />;
  }

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden" data-name="Desktop - 1">
      {/* Hero Section */}
      <div className="relative h-[1064px] mx-6 mt-6 rounded-[19px] overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imgHeroDesktop} />
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle1} fetchPriority="high" decoding="async" />
        </picture>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between px-[76px] pt-12">
            <Logo />
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#95e80f] px-8 py-2 rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] cursor-pointer hover:bg-[#84d30d] transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-20">
          <h1 className="font-['Gilroy:ExtraBold',sans-serif] text-[110px] leading-[85px] text-center text-white mb-6 whitespace-pre-line">
            {t.hero.title}
          </h1>
          <p className="font-['Montserrat:SemiBold',sans-serif] text-[15px] leading-[20px] text-center text-white max-w-[338px] mb-12">
            {t.hero.subtitle}
          </p>

          {/* Email Form */}
          <div className="relative w-[421px]">
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-md h-[58px] rounded-[29px] flex items-center px-6">
              <input
                type="email"
                placeholder={t.hero.emailPlaceholder}
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-white font-['Montserrat:SemiBold',sans-serif] text-[15px] flex-1"
              />
            </div>
            <button onClick={() => handleSubmit(heroEmail, setHeroEmail)} disabled={submitStatus === 'loading'} className="absolute right-2 top-2 bg-[#95e80f] px-6 py-2.5 rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] cursor-pointer hover:bg-[#84d30d] transition-colors disabled:opacity-60">
              {submitStatus === 'loading' ? '...' : 'Absenden'}
            </button>
          </div>
          {submitStatus === 'success' && <p className="mt-3 text-[#95e80f] font-['Montserrat:SemiBold',sans-serif] text-[13px]">Danke! Du wirst benachrichtigt.</p>}
          {submitStatus === 'error' && <p className="mt-3 text-red-400 font-['Montserrat:SemiBold',sans-serif] text-[13px]">Fehler – bitte erneut versuchen.</p>}
        </div>

        {/* Phone Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px]">
          <img alt="App Screenshot" className="w-full block" src={imgPhone} fetchPriority="high" decoding="async" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1232px] mx-auto px-6 pt-24 pb-0">
        <h2 className="font-['Montserrat:Bold',sans-serif] text-[60px] leading-[65px] text-center text-[#0f2301] mb-6 whitespace-pre-line">
          {t.features.title}
        </h2>
        <p className="font-['Montserrat:SemiBold',sans-serif] text-[15px] leading-[20px] text-center text-[#878a83] max-w-[338px] mx-auto mb-16 font-[Montserrat]">
          {t.features.subtitle}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Feature 1 - Der Swipe-Feed */}
          <div className="bg-[#f7f7f7] rounded-[22px] h-[430px] relative overflow-hidden">
            <img alt="Swipe Feed" className="absolute inset-0 w-full h-full object-cover object-top" src={image_Group_37_3} />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f7f7f7] to-[70%] pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 text-center px-8 z-10">
              <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[22px] leading-[30px] text-[#0f2301] mb-1">
                {t.features.feature1.title}
              </h3>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#878a83] max-w-[338px] mx-auto">
                {t.features.feature1.description}
              </p>
            </div>
          </div>

          {/* Feature 2 - Digitaler Kleiderschrank */}
          <div className="bg-[#f7f7f7] rounded-[22px] h-[430px] relative overflow-hidden">
            <img alt="Digitaler Kleiderschrank" className="absolute inset-0 w-full h-full object-cover object-top" src={image_Group_40_3} />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f7f7f7] to-[70%] pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 text-center px-8 z-10">
              <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[22px] leading-[30px] text-[#0f2301] mb-1">
                {t.features.feature2.title}
              </h3>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#878a83] max-w-[456px] mx-auto">
                {t.features.feature2.description}
              </p>
            </div>
          </div>

          {/* Feature 3 - KI-Modeberater */}
          <div className="bg-[#f7f7f7] rounded-[22px] h-[430px] relative overflow-hidden">
            <img alt="KI-Modeberater" className="absolute inset-0 w-full h-full object-cover object-top" src={image_Group_38_3} />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f7f7f7] to-[70%] pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 text-center px-8 z-10">
              <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[22px] leading-[30px] text-[#0f2301] mb-1">
                {t.features.feature3.title}
              </h3>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#878a83] max-w-[456px] mx-auto">
                {t.features.feature3.description}
              </p>
            </div>
          </div>

          {/* Feature 4 - Smart weitergeben */}
          <div className="bg-[#f7f7f7] rounded-[22px] h-[430px] relative overflow-hidden">
            <img alt="Smart weitergeben" className="absolute inset-0 w-full h-full object-cover object-top" src={image_Group_39_3} />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f7f7f7] to-[70%] pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 text-center px-8 z-10">
              <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[22px] leading-[30px] text-[#0f2301] mb-1">
                {t.features.feature4.title}
              </h3>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#878a83] max-w-[469px] mx-auto">
                {t.features.feature4.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section with Carousel */}
      <div className="max-w-[1232px] mx-auto px-6 py-20">
        <div className="partner-carousel">
          <Slider {...carouselSettings}>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <img alt="Jugend Gründet Logo" className="max-h-[85px] w-auto object-contain" src={imgJgLogo} />
              </div>
            </div>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <div className="w-[229px] h-[52px]">
                  <CampusFoundersLogoLight />
                </div>
              </div>
            </div>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <img alt="Startup Teens Logo" className="max-h-[80px] w-auto object-contain" src={imgStartupTeensLogo} />
              </div>
            </div>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <img alt="Jugend Gründet Logo" className="max-h-[85px] w-auto object-contain" src={imgJgLogo} />
              </div>
            </div>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <div className="w-[229px] h-[52px]">
                  <CampusFoundersLogoLight />
                </div>
              </div>
            </div>
            <div className="px-12">
              <div className="h-[100px] flex items-center justify-center">
                <img alt="Startup Teens Logo" className="max-h-[80px] w-auto object-contain" src={imgStartupTeensLogo} />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="max-w-[1232px] mx-auto px-6 mb-24">
        <div className="bg-[#f7f7f7] rounded-[22px] px-16 pt-12 pb-0 overflow-hidden relative">
          <div className="flex items-end gap-12">
            <div className="relative w-[291px] flex-shrink-0 self-stretch">
              <img alt="" className="absolute bottom-0 left-0 w-full" style={{ height: '115%', objectFit: 'contain', objectPosition: 'bottom center' }} src={imgChatGptImage16Mai202621435111} loading="lazy" decoding="async" />
            </div>

            <div className="flex-1 flex flex-col items-center pt-4 pb-12">
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[40px] leading-[65px] text-[#0f2301] text-center mb-2">
                {t.contact.title}
              </h2>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[15px] leading-[20px] text-[#878a83] text-center max-w-[338px] mb-8">
                {t.contact.subtitle}
              </p>

              {/* Email Form */}
              <div className="relative w-[421px]">
                <div className="bg-white h-[58px] rounded-[29px] flex items-center px-6">
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="bg-transparent border-none outline-none text-[#0f2301] placeholder-[#0f2301] font-['Montserrat:SemiBold',sans-serif] text-[15px] flex-1"
                  />
                </div>
                <button onClick={() => handleSubmit(contactEmail, setContactEmail)} disabled={submitStatus === 'loading'} className="absolute right-2 top-2 bg-[#95e80f] px-6 py-2.5 rounded-[33px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] font-['Gilroy:ExtraBold',sans-serif] text-[#0f2301] text-[15px] cursor-pointer hover:bg-[#84d30d] transition-colors disabled:opacity-60">
                  {submitStatus === 'loading' ? '...' : 'Absenden'}
                </button>
              </div>
              {submitStatus === 'success' && <p className="mt-3 text-[#0f2301] font-['Montserrat:SemiBold',sans-serif] text-[13px]">Danke! Du wirst benachrichtigt.</p>}
              {submitStatus === 'error' && <p className="mt-3 text-red-500 font-['Montserrat:SemiBold',sans-serif] text-[13px]">Fehler – bitte erneut versuchen.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#f7f7f7] py-16">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex justify-between items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              <Logo1 />
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[16px] leading-[1.4] text-[#878a83] max-w-[420px]">
                {t.footer.tagline}
              </p>
            </div>

            {/* Right Column */}
            <div className="flex justify-between w-[560px]">
              {/* Contact Info */}
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <p className="font-['Montserrat:Bold',sans-serif] text-[20px] leading-[1.1] text-black tracking-[-0.2px]">
                    {t.footer.contactTitle}
                  </p>
                  <div className="font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[1.6] text-[#878a83]">
                    
                    <p>info@fasher.de</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  
                  
                </div>
              </div>

              {/* Languages + Legal */}
              <div className="flex flex-col gap-4 items-end">
                <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.4] text-[#0f2301] font-[Gilroy] text-[20px]">
                  {t.footer.languages}
                </p>
                <div className="flex gap-5 font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[1.6]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`cursor-pointer transition-colors ${
                        currentLanguage === lang.code ? 'text-black' : 'text-[#878a83] hover:text-black'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col items-end gap-[8px] mt-4 font-['Montserrat:SemiBold',sans-serif] text-[14px] leading-[1.6]">
                  <button onClick={() => setPage('impressum')} className="text-[#878a83] cursor-pointer hover:text-black transition-colors">
                    Impressum
                  </button>
                  <button onClick={() => setPage('datenschutz')} className="text-[#878a83] cursor-pointer hover:text-black transition-colors">
                    Datenschutz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
