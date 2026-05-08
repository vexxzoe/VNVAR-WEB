import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Monitor, Maximize, Sun, ShieldCheck } from 'lucide-react';
import { useContactModal } from '../contexts/ModalContext';
import { LCD_PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const LCDPage = () => {
  const { openContactModal } = useContactModal();
  const { t, language } = useLanguage();

  const heroBadges = [
    { label: language === 'vi' ? 'Độ phân giải 4K' : '4K Resolution', icon: Maximize },
    { label: language === 'vi' ? 'Tần số quét 144Hz' : '144Hz Refresh Rate', icon: ShieldCheck },
    { label: language === 'vi' ? 'Chống chói chuyên dụng' : 'Anti-glare Protection', icon: Sun },
  ];

  useEffect(() => {
    console.log('LCDPage mounted');
  }, []);

  const handleQuote = (productName: string) => {
    openContactModal(productName);
  };

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO SECTION (Centered & Premium)
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden bg-brand-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=60"
            alt="LCD Display Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(2,34,46,0.95) 0%, rgba(2,34,46,0.85) 50%, rgba(2,34,46,0.95) 100%)' }}
        />

        {/* Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[120px] z-10" />

        <div className="relative z-20 max-w-4xl mx-auto w-full px-6 md:px-12 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            <Monitor className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-[10px] font-black tracking-[0.2em] uppercase">
              {language === 'vi' ? 'VNVAR · CÔNG NGHỆ CHECK VAR' : 'VNVAR · VAR TECHNOLOGY'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-white tracking-tight"
          >
            {language === 'vi' ? 'Màn hình Check VAR' : 'VAR Check Display'}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400">
              {language === 'vi' ? 'Chuẩn xác & Tức thì' : 'Precise & Instant'}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base md:text-lg text-white/70 mb-12 font-medium leading-relaxed"
          >
            {language === 'vi' 
              ? 'Giải pháp hiển thị VAR chuyên dụng cho thể thao. Độ phân giải cao, tần số quét cực lớn và khả năng xem lại tình huống chính xác tuyệt đối.'
              : 'Specialized VAR display solutions for sports. High resolution, ultra-high refresh rates, and absolute precision for reviewing situations.'}
          </motion.p>

          {/* Feature Badges (Pricing-style) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {heroBadges.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/60 text-sm font-bold">
                <item.icon className="w-4 h-4 text-accent-400" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATALOG SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        {/* Product Grid */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {LCD_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onQuote={handleQuote} t={t} language={language} />
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const ProductCard = ({ product, onQuote, t, language }: { product: any; onQuote: (name: string) => void; t: any, language: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white rounded-[48px] border border-brand-100/50 shadow-[0_4px_30px_rgba(8,103,136,0.04)] hover:shadow-[0_32px_70px_rgba(8,103,136,0.15)] transition-all duration-700 overflow-hidden h-full"
    >
      {/* Visual Header */}
      <div className="relative aspect-[16/9] p-8 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <img
          src={product.image}
          alt={typeof product.name === 'string' ? product.name : product.name[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out drop-shadow-2xl rounded-2xl"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-brand-100 text-[10px] font-black text-brand-950 uppercase tracking-[0.1em] shadow-sm">
            {product.subcategory}
          </span>
        </div>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-brand-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-500 flex flex-col items-center justify-center gap-4">
          <Link
            to={`/product/${product.slug}`}
            className="bg-white text-brand-950 px-8 py-3 rounded-full text-sm font-black shadow-2xl hover:bg-accent-400 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500"
          >
            {t.lcdPage.card.viewDetail}
          </Link>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="font-black text-brand-950 text-xl sm:text-2xl leading-[1.2] mb-3 group-hover:text-brand-600 transition-colors">
            {typeof product.name === 'string' ? product.name : product.name[language]}
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            {product.description[language]}
          </p>
        </div>

        {/* Specs with Icons */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-50 mb-8">
          <div className="flex flex-col items-center text-center">
            <Maximize className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase tracking-wider">{product.specs.size}</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-brand-50">
            <Sun className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase leading-none tracking-wider">
              {product.specs.brightness.split(' ')[0]}<br />
              {product.specs.brightness !== 'N/A' && <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">cd/m²</span>}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase tracking-wider">
              {product.specs.warranty.split(' ')[0]}<br />
              <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">{t.lcdPage.card.warrantyUnit}</span>
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-auto">
          <button
            onClick={() => onQuote(typeof product.name === 'string' ? product.name : product.name[language])}
            className="w-full bg-brand-950 text-white py-4 rounded-[20px] text-sm font-black hover:bg-brand-600 shadow-xl shadow-brand-950/10 transition-all active:scale-95"
          >
            {t.lcdPage.card.getQuote}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LCDPage;
