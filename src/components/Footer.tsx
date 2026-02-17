import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#080808] border-t" style={{ borderColor: 'var(--gold-border)' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="flex items-baseline gap-1 mb-4">
              <span className="font-heading text-2xl font-bold italic text-primary">LUXE</span>
              <span className="font-subheading text-sm text-foreground tracking-[4px]">STUDIO</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground italic mb-6">{t('footer', 'tagline')}</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Beauty Services */}
          <div>
            <h4 className="font-label text-sm text-primary tracking-wider mb-4">{t('footer', 'beautyServices')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground font-body">
              <span>Coafor & Styling</span>
              <span>Coloristică</span>
              <span>Manichiură & Pedichiură</span>
              <span>Make-up</span>
              <span>Tratamente</span>
            </div>
          </div>

          {/* Barber Services */}
          <div>
            <h4 className="font-label text-sm text-primary tracking-wider mb-4">{t('footer', 'barberServices')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground font-body">
              <span>Tunsoare</span>
              <span>Barbă & Modelare</span>
              <span>Ras Clasic</span>
              <span>Facial Barber</span>
              <span>Grooming</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-label text-sm text-primary tracking-wider mb-4">{t('footer', 'info')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground font-body">
              <span>{t('footer', 'address')}</span>
              <span>{t('footer', 'schedule')}</span>
              <span>+40 720 XXX XXX</span>
              <Link
                to="/rezervare"
                className="inline-block mt-3 font-subheading text-xs tracking-wider px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit"
              >
                {t('nav', 'book')} →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-body" style={{ borderColor: 'var(--gold-border)' }}>
          <span>{t('footer', 'rights')}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Termeni</a>
            <a href="#" className="hover:text-primary transition-colors">GDPR</a>
            <span>{t('footer', 'madeIn')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
