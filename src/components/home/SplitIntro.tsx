import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/Animations';
import beautyImage from '@/assets/beauty-woman.jpg';
import barberImage from '@/assets/barber-man.jpg';

const SplitIntro = () => {
  const { t } = useI18n();

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Beauty */}
        <div className="relative group overflow-hidden">
          <img src={beautyImage} alt="Beauty Studio" className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <Reveal>
              <span className="font-label text-xs tracking-[0.2em] text-accent-rose mb-4 inline-block px-4 py-1 border border-accent-rose/40 rounded-full">
                {t('split', 'beautyBadge')}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-heading font-bold italic text-4xl md:text-5xl text-primary mb-4">{t('split', 'forHer')}</h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-sm text-foreground/60 mb-6">{t('split', 'beautyServices')}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/servicii" className="font-subheading text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40">
                {t('split', 'beautyBtn')}
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Barber */}
        <div className="relative group overflow-hidden">
          <img src={barberImage} alt="Barber Shop" className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <Reveal>
              <span className="font-label text-xs tracking-[0.2em] text-accent-blue mb-4 inline-block px-4 py-1 border border-accent-blue/40 rounded-full">
                {t('split', 'barberBadge')}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-heading font-bold italic text-4xl md:text-5xl text-primary mb-4">{t('split', 'forHim')}</h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-sm text-foreground/60 mb-6">{t('split', 'barberServices')}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/servicii" className="font-subheading text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40">
                {t('split', 'barberBtn')}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Gold separator */}
      <div className="hidden md:block absolute top-1/4 bottom-1/4 left-1/2 w-px bg-primary/30" />
    </section>
  );
};

export default SplitIntro;
