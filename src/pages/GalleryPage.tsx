import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';

const galleryFilters = [
  { label: { ro: 'Toate', en: 'All' }, value: 'all' },
  { label: { ro: 'Coloristică', en: 'Coloring' }, value: 'coloring' },
  { label: { ro: 'Tunsori', en: 'Haircuts' }, value: 'haircuts' },
  { label: { ro: 'Make-up', en: 'Make-up' }, value: 'makeup' },
  { label: { ro: 'Barber', en: 'Barber' }, value: 'barber' },
  { label: { ro: 'Nails', en: 'Nails' }, value: 'nails' },
];

const galleryItems = [
  { category: 'coloring', tag: 'Balayage', stylist: 'Elena Stancu', gradient: 'from-amber-900/30 to-amber-700/10' },
  { category: 'barber', tag: 'Fade Cut', stylist: 'Vlad Ionescu', gradient: 'from-slate-900/30 to-slate-700/10' },
  { category: 'makeup', tag: 'Bridal', stylist: 'Andreea Pop', gradient: 'from-rose-900/30 to-rose-700/10' },
  { category: 'nails', tag: 'Nail Art', stylist: 'Andreea Pop', gradient: 'from-pink-900/30 to-pink-700/10' },
  { category: 'haircuts', tag: 'Bob Cut', stylist: 'Elena Stancu', gradient: 'from-stone-900/30 to-stone-700/10' },
  { category: 'barber', tag: 'Beard Design', stylist: 'Vlad Ionescu', gradient: 'from-zinc-900/30 to-zinc-700/10' },
  { category: 'coloring', tag: 'Highlights', stylist: 'Elena Stancu', gradient: 'from-yellow-900/30 to-yellow-700/10' },
  { category: 'makeup', tag: 'Evening Glam', stylist: 'Andreea Pop', gradient: 'from-purple-900/30 to-purple-700/10' },
];

const GalleryPage = () => {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <Reveal>
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">{t('gallery', 'heading')}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-muted-foreground mt-3">{t('gallery', 'subtitle')}</p>
          </Reveal>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryFilters.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`font-subheading text-xs tracking-wider px-5 py-2 border transition-all ${
                filter === f.value ? 'bg-primary text-primary-foreground border-primary' : 'border-primary/30 text-foreground/60 hover:border-primary/60'
              }`}
            >
              {f.label[lang]}
            </button>
          ))}
        </div>

        <StaggerContainer className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <StaggerItem key={i}>
              <div className={`luxe-card overflow-hidden break-inside-avoid group cursor-pointer`}>
                <div className={`bg-gradient-to-br ${item.gradient} aspect-[${i % 3 === 0 ? '3/4' : '4/3'}] min-h-[200px] ${i % 3 === 0 ? 'min-h-[280px]' : 'min-h-[200px]'} flex items-end p-4 relative`}>
                  <div className="absolute inset-0 bg-card" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="relative z-10 w-full">
                    <span className="font-label text-[10px] tracking-wider px-3 py-1 border border-primary/40 text-primary rounded-full inline-block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.tag}
                    </span>
                    <p className="font-body text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.stylist}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-16">
          <a href="https://instagram.com/luxestudio" target="_blank" rel="noopener" className="font-subheading text-sm tracking-wider text-primary hover:text-primary-light transition-colors">
            {t('gallery', 'followUs')}
          </a>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
