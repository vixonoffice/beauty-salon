import { useI18n } from '@/lib/i18n';
import { Reveal, AnimatedCounter } from '@/components/Animations';

const StatsSection = () => {
  const { t } = useI18n();

  const stats = [
    { target: 2000, suffix: '+', label: t('stats', 'clients') },
    { target: 8, suffix: '', label: t('stats', 'years') },
    { target: 12, suffix: '', label: t('stats', 'stylists') },
    { target: 98, suffix: '%', label: t('stats', 'returning') },
  ];

  return (
    <section className="py-20 border-y" style={{ borderColor: 'var(--gold-border)' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
