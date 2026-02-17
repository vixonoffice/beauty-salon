import { Reveal } from '@/components/Animations';

const brands = ['Schwarzkopf', "L'Oréal Pro", 'Wella', 'OPI', 'Kérastase', 'Moroccanoil'];

const BrandsSection = () => {
  return (
    <section className="py-16 border-y" style={{ borderColor: 'var(--gold-border)' }}>
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="section-label text-center mb-10">WE USE</p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <span className="font-subheading text-lg md:text-xl text-foreground/30 hover:text-foreground/80 transition-colors duration-300 cursor-default">
                {brand}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
