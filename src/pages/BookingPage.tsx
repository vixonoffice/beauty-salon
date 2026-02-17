import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Reveal } from '@/components/Animations';
import { Check, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const beautyServices = [
  { name: { ro: 'Tunsoare & Styling Feminin', en: "Women's Haircut & Styling" }, duration: 60, price: 120 },
  { name: { ro: 'Colorat / Balayage', en: 'Coloring / Balayage' }, duration: 120, price: 250 },
  { name: { ro: 'Manichiură Gel', en: 'Gel Manicure' }, duration: 60, price: 100 },
  { name: { ro: 'Make-up Ocazie', en: 'Occasion Make-up' }, duration: 90, price: 200 },
  { name: { ro: 'Tratament Keratină', en: 'Keratin Treatment' }, duration: 180, price: 350 },
  { name: { ro: 'Coafat Ocazie', en: 'Occasion Updo' }, duration: 60, price: 150 },
];

const barberServices = [
  { name: { ro: 'Tunsoare Clasică', en: 'Classic Haircut' }, duration: 30, price: 60 },
  { name: { ro: 'Tunsoare Fade', en: 'Fade Haircut' }, duration: 45, price: 80 },
  { name: { ro: 'Tuns Barbă', en: 'Beard Trim' }, duration: 20, price: 40 },
  { name: { ro: 'Tunsoare + Barbă', en: 'Haircut + Beard' }, duration: 60, price: 110 },
  { name: { ro: 'Ras Clasic cu Lamă', en: 'Classic Blade Shave' }, duration: 30, price: 80 },
  { name: { ro: 'Facial Barber', en: 'Barber Facial' }, duration: 45, price: 120 },
];

const stylists = [
  { name: 'Elena Stancu', specialty: { ro: 'Senior Hair Stylist', en: 'Senior Hair Stylist' }, category: 'beauty' },
  { name: 'Vlad Ionescu', specialty: { ro: 'Master Barber', en: 'Master Barber' }, category: 'barber' },
  { name: 'Andreea Pop', specialty: { ro: 'Nail Artist & Make-up', en: 'Nail Artist & Make-up' }, category: 'beauty' },
];

const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];

const BookingPage = () => {
  const { lang, t } = useI18n();
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<'beauty' | 'barber' | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', notes: '', firstVisit: false, whatsapp: false });
  const [confirmed, setConfirmed] = useState(false);

  const services = category === 'beauty' ? beautyServices : barberServices;
  const filteredStylists = category ? stylists.filter(s => s.category === category || s.category === 'both') : stylists;

  const steps = [t('booking', 'step1'), t('booking', 'step2'), t('booking', 'step3'), t('booking', 'step4')];

  const canNext = () => {
    if (step === 1) return category !== null;
    if (step === 2) return selectedService !== null;
    if (step === 3) return selectedDate && selectedTime;
    if (step === 4) return form.firstName && form.lastName && form.phone && form.email;
    return false;
  };

  const handleConfirm = () => setConfirmed(true);

  if (confirmed) {
    const service = services[selectedService!];
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="luxe-card p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold italic text-3xl text-primary mb-2">
              {t('booking', 'success')}
            </h2>
            <div className="mt-8 space-y-3 text-left">
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--gold-border)' }}>
                <span className="text-muted-foreground font-body text-sm">{t('booking', 'step2')}</span>
                <span className="font-subheading text-sm text-foreground">{service.name[lang]}</span>
              </div>
              {selectedStylist && (
                <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--gold-border)' }}>
                  <span className="text-muted-foreground font-body text-sm">Stilist</span>
                  <span className="font-subheading text-sm text-foreground">{selectedStylist}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--gold-border)' }}>
                <span className="text-muted-foreground font-body text-sm">{t('booking', 'step3')}</span>
                <span className="font-subheading text-sm text-foreground">{selectedDate} — {selectedTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <Reveal><span className="section-label">{t('booking', 'badge')}</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-3">{t('booking', 'heading')}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-muted-foreground">{t('booking', 'subtitle')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Stepper + Form (3 cols) */}
          <div className="lg:col-span-3">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-10">
              {steps.map((label, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className={`flex items-center gap-2 ${i + 1 <= step ? 'text-primary' : 'text-muted-foreground/40'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-bold border ${
                      i + 1 < step ? 'bg-primary text-primary-foreground border-primary' :
                      i + 1 === step ? 'border-primary text-primary' : 'border-muted-foreground/20'
                    }`}>
                      {i + 1 < step ? <Check size={14} /> : i + 1}
                    </div>
                    <span className="font-body text-xs hidden sm:inline">{label}</span>
                  </div>
                  {i < 3 && <div className={`flex-1 h-px mx-2 ${i + 1 < step ? 'bg-primary' : 'bg-muted-foreground/20'}`} />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Category */}
                {step === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {(['beauty', 'barber'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setCategory(cat); setSelectedService(null); }}
                        className={`luxe-card p-8 text-center transition-all ${category === cat ? 'gold-border-hover' : ''}`}
                      >
                        <span className="text-4xl mb-3 block">{cat === 'beauty' ? '💇‍♀️' : '💇‍♂️'}</span>
                        <span className="font-subheading text-lg text-foreground">{cat === 'beauty' ? 'BEAUTY' : 'BARBER'}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 2: Service */}
                {step === 2 && (
                  <div className="grid gap-3">
                    {services.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedService(i)}
                        className={`luxe-card p-5 flex items-center justify-between text-left ${selectedService === i ? 'gold-border-hover' : ''}`}
                      >
                        <div>
                          <span className="font-subheading text-sm text-foreground">{s.name[lang]}</span>
                          <span className="font-body text-xs text-muted-foreground block mt-1">{s.duration} min</span>
                        </div>
                        <span className="font-heading font-bold text-lg text-primary">{s.price} RON</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3: Stylist & Date */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="font-label text-xs tracking-wider text-primary mb-3 block">Stilist</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSelectedStylist(null)}
                          className={`luxe-card p-4 text-center text-sm font-body ${!selectedStylist ? 'gold-border-hover' : ''}`}
                        >
                          {t('booking', 'noPreference')}
                        </button>
                        {filteredStylists.map(s => (
                          <button
                            key={s.name}
                            onClick={() => setSelectedStylist(s.name)}
                            className={`luxe-card p-4 text-center ${selectedStylist === s.name ? 'gold-border-hover' : ''}`}
                          >
                            <span className="font-subheading text-sm text-foreground block">{s.name}</span>
                            <span className="font-body text-xs text-muted-foreground">{s.specialty[lang]}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-label text-xs tracking-wider text-primary mb-3 block">Data</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                        style={{ borderColor: 'var(--gold-border)', colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label className="font-label text-xs tracking-wider text-primary mb-3 block">Ora</label>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded font-body text-sm border transition-all ${
                              selectedTime === time
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-card border-primary/20 text-foreground hover:border-primary/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Personal details */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('booking', 'firstName')}</label>
                        <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}
                          className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          style={{ borderColor: 'var(--gold-border)' }} />
                      </div>
                      <div>
                        <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('booking', 'lastName')}</label>
                        <input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}
                          className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          style={{ borderColor: 'var(--gold-border)' }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('booking', 'phone')}</label>
                        <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          style={{ borderColor: 'var(--gold-border)' }} />
                      </div>
                      <div>
                        <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('booking', 'email')}</label>
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          style={{ borderColor: 'var(--gold-border)' }} />
                      </div>
                    </div>
                    <div>
                      <label className="font-label text-xs tracking-wider text-primary mb-2 block">{t('booking', 'notes')}</label>
                      <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}
                        placeholder={t('booking', 'notesPlaceholder')}
                        rows={3}
                        className="w-full bg-card border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                        style={{ borderColor: 'var(--gold-border)' }} />
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={form.firstVisit} onChange={e => setForm({...form, firstVisit: e.target.checked})}
                        className="accent-primary" />
                      <span className="font-body text-sm text-foreground">{t('booking', 'firstVisit')}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.checked})}
                        className="accent-primary" />
                      <span className="font-body text-sm text-foreground">{t('booking', 'whatsapp')}</span>
                    </label>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="font-subheading text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← {t('booking', 'back')}
                </button>
              ) : <div />}
              {step < 4 ? (
                <button
                  onClick={() => canNext() && setStep(step + 1)}
                  disabled={!canNext()}
                  className={`font-subheading text-sm tracking-wider px-8 py-3 border transition-all ${
                    canNext()
                      ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                      : 'border-muted-foreground/20 text-muted-foreground/40 cursor-not-allowed'
                  }`}
                >
                  {t('booking', 'next')} →
                </button>
              ) : (
                <button
                  onClick={() => canNext() && handleConfirm()}
                  disabled={!canNext()}
                  className={`font-subheading text-sm tracking-wider px-8 py-3 transition-all ${
                    canNext()
                      ? 'bg-primary text-primary-foreground hover:bg-primary-light'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  {t('booking', 'confirm')}
                </button>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-2">
            <div className="luxe-card p-6 sticky top-28">
              <h3 className="font-label text-xs tracking-wider text-primary mb-4">{t('booking', 'summary')}</h3>
              <div className="space-y-3 text-sm font-body">
                {category && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('booking', 'step1')}</span>
                    <span className="text-foreground capitalize">{category}</span>
                  </div>
                )}
                {selectedService !== null && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('booking', 'step2')}</span>
                    <span className="text-foreground">{services[selectedService].name[lang]}</span>
                  </div>
                )}
                {selectedStylist && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stilist</span>
                    <span className="text-foreground">{selectedStylist}</span>
                  </div>
                )}
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data</span>
                    <span className="text-foreground">{selectedDate}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ora</span>
                    <span className="text-foreground">{selectedTime}</span>
                  </div>
                )}
                {selectedService !== null && (
                  <div className="flex justify-between pt-3 border-t" style={{ borderColor: 'var(--gold-border)' }}>
                    <span className="text-foreground font-subheading">Total</span>
                    <span className="text-primary font-heading font-bold text-lg">{services[selectedService].price} RON</span>
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-3 text-xs text-muted-foreground font-body">
                <p>📍 {t('booking', 'arrive')}</p>
                <p>🅿️ {t('booking', 'parking')}</p>
                <p>📞 {t('booking', 'emergency')}: +40 720 XXX XXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
