import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Scissors, SprayCan } from 'lucide-react';

const services = [
  { icon: '💇‍♀️', name: { ro: 'Tunsoare & Styling Feminin', en: 'Women\'s Haircut & Styling' }, duration: 60, price: 120 },
  { icon: '💇‍♂️', name: { ro: 'Tunsoare & Barbă', en: 'Haircut & Beard' }, duration: 45, price: 80 },
  { icon: '💅', name: { ro: 'Manichiură Gel', en: 'Gel Manicure' }, duration: 60, price: 100 },
  { icon: '💄', name: { ro: 'Make-up Ocazie', en: 'Occasion Make-up' }, duration: 90, price: 200 },
  { icon: '🧴', name: { ro: 'Tratament Keratină', en: 'Keratin Treatment' }, duration: 180, price: 350 },
  { icon: '🪒', name: { ro: 'Rasul Clasic cu Lamă', en: 'Classic Blade Shave' }, duration: 30, price: 60 },
];

const PopularServices = () => {
  const { lang, t } = useI18n();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-label">{t('services', 'label')}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4">
              {t('services', 'heading')}
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="luxe-card p-6 flex flex-col h-full">
                <span className="text-2xl mb-3">{service.icon}</span>
                <h3 className="font-subheading text-lg text-foreground mb-2">
                  {service.name[lang]}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-body mb-4">
                  <span>{service.duration} {t('services', 'duration')}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  <span className="text-primary font-heading font-bold text-lg">{service.price} RON</span>
                </div>
                <Link
                  to="/rezervare"
                  className="mt-auto font-subheading text-xs tracking-wider text-primary hover:text-primary-light transition-colors"
                >
                  {t('services', 'bookBtn')}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PopularServices;
