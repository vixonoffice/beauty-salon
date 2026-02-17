import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Animations';
import teamElena from '@/assets/team-elena.jpg';
import teamVlad from '@/assets/team-vlad.jpg';
import teamAndreea from '@/assets/team-andreea.jpg';

const team = [
  {
    name: 'Elena Stancu',
    title: { ro: 'Senior Hair Stylist', en: 'Senior Hair Stylist' },
    years: 12,
    tags: ['Coloristică', 'Balayage', 'Keratin'],
    image: teamElena,
  },
  {
    name: 'Vlad Ionescu',
    title: { ro: 'Master Barber', en: 'Master Barber' },
    years: 8,
    tags: ['Fade', 'Beard Design', 'Hot Towel'],
    image: teamVlad,
  },
  {
    name: 'Andreea Pop',
    title: { ro: 'Nail Artist & Make-up', en: 'Nail Artist & Make-up' },
    years: 6,
    tags: ['Gel', 'Nail Art', 'Bridal'],
    image: teamAndreea,
  },
];

const TeamSection = () => {
  const { lang, t } = useI18n();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal><span className="section-label">{t('team', 'label')}</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4">{t('team', 'heading')}</h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <StaggerItem key={i}>
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading font-bold italic text-2xl text-primary mb-1">{member.name}</h3>
                  <p className="font-body text-sm text-foreground/70 mb-2">{member.title[lang]}</p>
                  <p className="font-body text-xs text-muted-foreground mb-3">
                    {member.years} {t('team', 'years')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.tags.map(tag => (
                      <span key={tag} className="font-body text-[10px] tracking-wider px-3 py-1 border border-primary/30 text-primary/80 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/rezervare"
                    className="font-subheading text-xs tracking-wider text-primary hover:text-primary-light transition-colors opacity-0 group-hover:opacity-100 duration-500"
                  >
                    {t('team', 'bookWith')} {member.name.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;
