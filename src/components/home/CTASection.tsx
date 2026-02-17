import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/Animations';

const CTASection = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with warm gold undertone */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1A1209]" />
      <div className="absolute inset-0 diagonal-lines" />

      <div className="relative container mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-heading font-bold italic text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
            {t('cta', 'heading')}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-body font-light text-lg text-foreground/60 mb-10 max-w-lg mx-auto">
            {t('cta', 'subtitle')}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/rezervare"
            className="inline-block font-subheading text-sm tracking-wider px-12 py-5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
          >
            {t('cta', 'bookNow')}
          </Link>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-body text-xs text-muted-foreground mt-8 tracking-wider">
            {t('cta', 'features')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
