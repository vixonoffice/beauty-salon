import { useI18n } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';
import teamElena from '@/assets/team-elena.jpg';
import teamVlad from '@/assets/team-vlad.jpg';
import teamAndreea from '@/assets/team-andreea.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Elena Stancu',
    title: { ro: 'Senior Hair Stylist', en: 'Senior Hair Stylist' },
    bio: { ro: 'Cu peste 12 ani de experiență în industria beauty, Elena este expertă în coloristică și tehnici avansate de styling. Formată la academii din Milano și Paris.', en: 'With over 12 years of experience in the beauty industry, Elena is an expert in colorimetry and advanced styling techniques. Trained at academies in Milan and Paris.' },
    years: 12,
    tags: ['Coloristică', 'Balayage', 'Keratin', 'Styling'],
    image: teamElena,
    category: 'beauty',
  },
  {
    name: 'Vlad Ionescu',
    title: { ro: 'Master Barber', en: 'Master Barber' },
    bio: { ro: '8 ani de meserie, Vlad este cunoscut pentru fade-urile sale impecabile și beard design. Câștigător la competiții naționale de barbering.', en: '8 years in the craft, Vlad is known for his impeccable fades and beard design. Winner at national barbering competitions.' },
    years: 8,
    tags: ['Fade', 'Beard Design', 'Hot Towel', 'Grooming'],
    image: teamVlad,
    category: 'barber',
  },
  {
    name: 'Andreea Pop',
    title: { ro: 'Nail Artist & Make-up', en: 'Nail Artist & Make-up' },
    bio: { ro: 'Andreea transformă fiecare manichiură într-o operă de artă. Specializată în make-up bridal și nail art, cu 6 ani de experiență și sute de mirese fericite.', en: 'Andreea transforms every manicure into a work of art. Specialized in bridal make-up and nail art, with 6 years of experience and hundreds of happy brides.' },
    years: 6,
    tags: ['Gel', 'Nail Art', 'Bridal', 'Make-up'],
    image: teamAndreea,
    category: 'beauty',
  },
];

const filters = [
  { label: { ro: 'Toți', en: 'All' }, value: 'all' },
  { label: { ro: 'Beauty', en: 'Beauty' }, value: 'beauty' },
  { label: { ro: 'Barber', en: 'Barber' }, value: 'barber' },
];

const TeamPage = () => {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? teamMembers : teamMembers.filter(m => m.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">The Luxe Team</h1>
          </Reveal>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`font-subheading text-xs tracking-wider px-6 py-2 border transition-all ${
                filter === f.value ? 'bg-primary text-primary-foreground border-primary' : 'border-primary/30 text-foreground/60 hover:border-primary/60'
              }`}
            >
              {f.label[lang]}
            </button>
          ))}
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filtered.map((member, i) => (
            <StaggerItem key={member.name}>
              <div className="luxe-card overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold italic text-2xl text-primary mb-1">{member.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">{member.title[lang]} • {member.years} {t('team', 'years')}</p>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">{member.bio[lang]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map(tag => (
                      <span key={tag} className="font-body text-[10px] tracking-wider px-3 py-1 border border-primary/30 text-primary/70 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/rezervare" className="font-subheading text-xs tracking-wider text-primary hover:text-primary-light transition-colors">
                    {t('team', 'bookWith')} {member.name.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
};

export default TeamPage;
