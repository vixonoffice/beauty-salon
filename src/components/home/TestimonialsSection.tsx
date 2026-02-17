import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/Animations';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: { ro: 'Am venit cu părul distrus de un alt salon. Elena a făcut miracole. Am ieșit cu părul de-a dreptul de revistă.', en: 'I came with my hair ruined by another salon. Elena worked miracles. I left with magazine-worthy hair.' },
    name: 'Bianca M.',
    service: { ro: 'Coloristică + Tuns', en: 'Coloring + Cut' },
  },
  {
    text: { ro: 'Vlad e cel mai bun barber din București. Beard design impecabil, relaxant total. Mă duc săptămânal.', en: 'Vlad is the best barber in Bucharest. Impeccable beard design, total relaxation. I go weekly.' },
    name: 'Alexandru T.',
    service: { ro: 'Tunsoare + Barbă', en: 'Haircut + Beard' },
  },
  {
    text: { ro: 'Make-up-ul pentru nuntă a fost exact ce am visat. Andreea m-a ascultat, m-a sfătuit, rezultatul a fost wow.', en: 'The wedding make-up was exactly what I dreamed of. Andreea listened, advised me, and the result was wow.' },
    name: 'Ioana D.',
    service: { ro: 'Bridal Make-up', en: 'Bridal Make-up' },
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useI18n();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const item = testimonials[current];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal><span className="section-label">{t('testimonials', 'label')}</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4">{t('testimonials', 'heading')}</h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <span className="font-heading text-7xl text-primary/20 leading-none block mb-4">"</span>
          <p className="font-heading italic text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
            {item.text[lang]}
          </p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="font-subheading text-sm text-foreground">— {item.name}</p>
          <p className="font-body text-xs text-muted-foreground">{item.service[lang]}</p>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
