import { useI18n, getWhyUsItems } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Sparkles, Clock, Award, Coffee } from 'lucide-react';

const icons = [Sparkles, Clock, Award, Coffee];

const WhyUsSection = () => {
  const { lang, t } = useI18n();
  const items = getWhyUsItems(lang);

  return (
    <section className="py-24 md:py-32 bg-secondary diagonal-lines">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal><span className="section-label">{t('whyUs', 'label')}</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4">{t('whyUs', 'heading')}</h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="luxe-card p-8 text-center h-full">
                  <Icon size={28} className="text-primary mx-auto mb-4" />
                  <h3 className="font-subheading text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyUsSection;
