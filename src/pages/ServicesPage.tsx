import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';

const beautyCategories = [
  {
    title: { ro: 'Coafor', en: 'Hair' },
    items: [
      { name: { ro: 'Tuns & Styling Feminin', en: "Women's Cut & Styling" }, price: '80-150', duration: '45-60' },
      { name: { ro: 'Colorat (vopsit, balayage, highlights)', en: 'Coloring (dye, balayage, highlights)' }, price: '180-400', duration: '120-180' },
      { name: { ro: 'Tratament Keratină / Botox Capilar', en: 'Keratin / Hair Botox Treatment' }, price: '300-500', duration: '120-180' },
      { name: { ro: 'Extensii Păr', en: 'Hair Extensions' }, price: 'de la 600', duration: '180+' },
      { name: { ro: 'Coafat Ocazie', en: 'Occasion Updo' }, price: '150-250', duration: '60-90' },
      { name: { ro: 'Coafat Mireasă', en: 'Bridal Updo' }, price: '300-500', duration: '90-120' },
    ],
  },
  {
    title: { ro: 'Manichiură & Pedichiură', en: 'Manicure & Pedicure' },
    items: [
      { name: { ro: 'Manichiură simplă', en: 'Simple Manicure' }, price: '60', duration: '30' },
      { name: { ro: 'Manichiură gel', en: 'Gel Manicure' }, price: '100', duration: '60' },
      { name: { ro: 'Nail Art (per design)', en: 'Nail Art (per design)' }, price: '+30-80', duration: '' },
      { name: { ro: 'Pedichiură simplă', en: 'Simple Pedicure' }, price: '80', duration: '45' },
      { name: { ro: 'Pedichiură gel', en: 'Gel Pedicure' }, price: '130', duration: '75' },
    ],
  },
  {
    title: { ro: 'Make-up', en: 'Make-up' },
    items: [
      { name: { ro: 'Make-up de zi', en: 'Day Make-up' }, price: '120', duration: '45' },
      { name: { ro: 'Make-up seară/ocazie', en: 'Evening/Occasion Make-up' }, price: '200', duration: '60' },
      { name: { ro: 'Make-up mireasă', en: 'Bridal Make-up' }, price: '400', duration: '90' },
      { name: { ro: 'Make-up mireasă + trial', en: 'Bridal Make-up + Trial' }, price: '600', duration: '120' },
    ],
  },
  {
    title: { ro: 'Tratamente', en: 'Treatments' },
    items: [
      { name: { ro: 'Facial hidratant', en: 'Hydrating Facial' }, price: '200', duration: '60' },
      { name: { ro: 'Facial anti-aging', en: 'Anti-aging Facial' }, price: '280', duration: '75' },
      { name: { ro: 'Masaj relaxant', en: 'Relaxation Massage' }, price: '180', duration: '60' },
    ],
  },
];

const barberCategories = [
  {
    title: { ro: 'Tunsoare', en: 'Haircut' },
    items: [
      { name: { ro: 'Tunsoare clasică', en: 'Classic Haircut' }, price: '60', duration: '30' },
      { name: { ro: 'Tunsoare fade/undercut', en: 'Fade/Undercut' }, price: '80', duration: '45' },
      { name: { ro: 'Tunsoare copii', en: "Children's Haircut" }, price: '50', duration: '25' },
      { name: { ro: 'Tunsoare senior', en: 'Senior Haircut' }, price: '50', duration: '30' },
    ],
  },
  {
    title: { ro: 'Barbă', en: 'Beard' },
    items: [
      { name: { ro: 'Tuns barbă', en: 'Beard Trim' }, price: '40', duration: '20' },
      { name: { ro: 'Modelare barbă', en: 'Beard Shaping' }, price: '60', duration: '30' },
      { name: { ro: 'Ras clasic cu lamă + hot towel', en: 'Classic Blade Shave + Hot Towel' }, price: '80', duration: '30' },
      { name: { ro: 'Barbă + tunsoare (pachet)', en: 'Beard + Haircut (package)' }, price: '110', duration: '60' },
    ],
  },
  {
    title: { ro: 'Tratamente Barber', en: 'Barber Treatments' },
    items: [
      { name: { ro: 'Facial Barber', en: 'Barber Facial' }, price: '120', duration: '45' },
      { name: { ro: 'Tratament barbă (uleiuri premium)', en: 'Beard Treatment (premium oils)' }, price: '60', duration: '20' },
      { name: { ro: 'Ceară/wax sprâncene', en: 'Eyebrow Wax' }, price: '40', duration: '10' },
    ],
  },
];

const packages = [
  { name: { ro: 'Pachet Mireasă', en: 'Bridal Package' }, desc: { ro: 'coafor + make-up + manichiură', en: 'hair + make-up + manicure' }, price: '800', badge: 'Exclusive' },
  { name: { ro: 'Pachet Groom', en: 'Groom Package' }, desc: { ro: 'tunsoare + barbă + facial', en: 'haircut + beard + facial' }, price: '200', badge: 'Popular' },
  { name: { ro: 'Abonament Lunar Barber', en: 'Monthly Barber Sub' }, desc: { ro: '4 vizite — Save 30%', en: '4 visits — Save 30%' }, price: '280', badge: 'Save 30%' },
];

const ServicesPage = () => {
  const { lang, t } = useI18n();
  const [tab, setTab] = useState<'beauty' | 'barber'>('beauty');
  const categories = tab === 'beauty' ? beautyCategories : barberCategories;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">{t('servicesPage', 'heading')}</h1>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {(['beauty', 'barber'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-subheading text-sm tracking-wider px-8 py-3 border transition-all ${
                tab === t ? 'bg-primary text-primary-foreground border-primary' : 'border-primary/30 text-foreground/60 hover:border-primary/60'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <Reveal>
                <h2 className="font-heading font-bold italic text-3xl text-primary mb-6">{cat.title[lang]}</h2>
                <div className="gold-line mb-6" />
              </Reveal>
              <StaggerContainer className="space-y-1">
                {cat.items.map((item, ii) => (
                  <StaggerItem key={ii}>
                    <div className="flex items-center justify-between py-4 border-b border-primary/10 group hover:bg-card/50 px-3 -mx-3 transition-colors">
                      <div>
                        <span className="font-subheading text-sm text-foreground">{item.name[lang]}</span>
                        {item.duration && (
                          <span className="font-body text-xs text-muted-foreground ml-3">{item.duration} min</span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-heading font-bold text-lg text-primary">{item.price} RON</span>
                        <Link
                          to="/rezervare"
                          className="font-subheading text-xs tracking-wider text-primary/60 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Rezervă →
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}

          {/* Packages */}
          <div>
            <Reveal>
              <h2 className="font-heading font-bold italic text-3xl text-primary mb-6">
                {lang === 'ro' ? 'Pachete Speciale' : 'Special Packages'}
              </h2>
              <div className="gold-line mb-6" />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="luxe-card p-6 text-center relative overflow-hidden">
                    <span className="absolute top-3 right-3 font-label text-[10px] tracking-wider px-3 py-1 border border-primary/40 text-primary rounded-full">
                      {pkg.badge}
                    </span>
                    <h3 className="font-subheading text-lg text-foreground mt-4 mb-2">{pkg.name[lang]}</h3>
                    <p className="font-body text-xs text-muted-foreground mb-4">{pkg.desc[lang]}</p>
                    <span className="font-heading font-bold text-2xl text-primary">{pkg.price} RON</span>
                    <Link
                      to="/rezervare"
                      className="block mt-4 font-subheading text-xs tracking-wider text-primary hover:text-primary-light transition-colors"
                    >
                      Rezervă →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
