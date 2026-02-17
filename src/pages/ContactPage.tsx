import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/Animations';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const { lang, t } = useI18n();
  const [sent, setSent] = useState(false);

  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    if (day === 0) return hour >= 10 && hour < 17;
    if (day >= 1 && day <= 6) return hour >= 9 && hour < 20;
    return false;
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">{t('contact', 'heading')}</h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <Reveal>
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <div>
                <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('contact', 'name')}</label>
                <input required className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary" style={{ borderColor: 'var(--gold-border)' }} />
              </div>
              <div>
                <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('contact', 'email')}</label>
                <input type="email" required className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary" style={{ borderColor: 'var(--gold-border)' }} />
              </div>
              <div>
                <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('contact', 'subject')}</label>
                <select className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary" style={{ borderColor: 'var(--gold-border)' }}>
                  {Object.entries(t('contact', 'subjects') === 'subjects' ? {} : {
                    question: lang === 'ro' ? 'Întrebare serviciu' : 'Service question',
                    booking: lang === 'ro' ? 'Rezervare' : 'Booking',
                    partnership: lang === 'ro' ? 'Parteneriat' : 'Partnership',
                    complaint: lang === 'ro' ? 'Reclamație' : 'Complaint',
                    other: lang === 'ro' ? 'Altul' : 'Other',
                  }).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('contact', 'message')}</label>
                <textarea required rows={5} className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary resize-none" style={{ borderColor: 'var(--gold-border)' }} />
              </div>
              {sent ? (
                <div className="luxe-card p-4 text-center">
                  <span className="font-body text-sm text-primary">✓ {lang === 'ro' ? 'Mesaj trimis cu succes!' : 'Message sent successfully!'}</span>
                </div>
              ) : (
                <button type="submit" className="font-subheading text-sm tracking-wider px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  {t('contact', 'send')}
                </button>
              )}
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.2}>
            <div className="luxe-card p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-subheading text-sm text-foreground">{lang === 'ro' ? 'Str. Victoriei 42, București' : '42 Victoriei St., Bucharest'}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{lang === 'ro' ? 'Parcare în față, intrare din stradă' : 'Parking in front, street entrance'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-subheading text-sm text-foreground">{lang === 'ro' ? 'L-S: 09:00-20:00 | D: 10:00-17:00' : 'Mon-Sat: 09:00-20:00 | Sun: 10:00-17:00'}</p>
                  <span className={`inline-block mt-2 font-label text-[10px] tracking-wider px-3 py-1 rounded-full border ${
                    isOpen() ? 'border-green-500/40 text-green-400' : 'border-red-500/40 text-red-400'
                  }`}>
                    {isOpen() ? t('contact', 'open') : t('contact', 'closed')}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-subheading text-sm text-foreground">+40 720 XXX XXX</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">WhatsApp</p>
                </div>
              </div>

              <div className="gold-line my-4" />

              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle size={20} /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
