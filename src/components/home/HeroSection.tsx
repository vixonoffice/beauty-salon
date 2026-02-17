import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-salon.jpg';

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxe Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      </div>
      
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Gold vertical line */}
      <div className="absolute left-12 top-1/4 bottom-1/4 w-px bg-primary/30 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-label text-sm tracking-[0.3em] text-primary mb-8"
        >
          {t('hero', 'badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading font-bold italic leading-none mb-6"
        >
          <span className="block text-7xl md:text-8xl lg:text-9xl text-foreground">{t('hero', 'line1')}</span>
          <span className="block text-7xl md:text-8xl lg:text-9xl text-primary italic">{t('hero', 'line2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body font-light text-sm text-foreground/50 tracking-[0.2em] uppercase mb-12"
        >
          {t('hero', 'tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/rezervare"
            className="font-subheading text-sm tracking-wider px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
          >
            {t('hero', 'bookNow')}
          </Link>
          <Link
            to="/servicii"
            className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/50 hover:decoration-primary"
          >
            {t('hero', 'explore')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-body text-[10px] tracking-[0.3em] text-foreground/30">{t('hero', 'scroll')}</span>
        <div className="w-px h-8 bg-primary/30 relative overflow-hidden">
          <div className="w-full h-3 bg-primary animate-scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
