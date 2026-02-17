import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'ro' | 'en';

const translations = {
  nav: {
    home: { ro: 'Acasă', en: 'Home' },
    services: { ro: 'Servicii', en: 'Services' },
    team: { ro: 'Echipa', en: 'Team' },
    gallery: { ro: 'Galerie', en: 'Gallery' },
    prices: { ro: 'Prețuri', en: 'Prices' },
    contact: { ro: 'Contact', en: 'Contact' },
    book: { ro: 'Rezervă', en: 'Book Now' },
    beauty: { ro: 'Beauty', en: 'Beauty' },
    barber: { ro: 'Barber', en: 'Barber' },
  },
  hero: {
    badge: { ro: '— EST. 2016 —', en: '— EST. 2016 —' },
    line1: { ro: 'Arta', en: 'The Art' },
    line2: { ro: 'Frumuseții', en: 'of Beauty' },
    tagline: { ro: 'WHERE STYLE MEETS PERFECTION', en: 'WHERE STYLE MEETS PERFECTION' },
    bookNow: { ro: 'Rezervă Acum', en: 'Book Now' },
    explore: { ro: 'Explorează Serviciile', en: 'Explore Services' },
    scroll: { ro: 'SCROLL', en: 'SCROLL' },
  },
  split: {
    beautyBadge: { ro: 'Beauty Studio', en: 'Beauty Studio' },
    barberBadge: { ro: 'Barber Shop', en: 'Barber Shop' },
    forHer: { ro: 'Pentru Ea', en: 'For Her' },
    forHim: { ro: 'Pentru El', en: 'For Him' },
    beautyServices: { ro: 'Coafor • Manichiură • Make-up • Tratamente', en: 'Hair • Nails • Make-up • Treatments' },
    barberServices: { ro: 'Tunsoare • Barbă • Facial • Grooming', en: 'Haircut • Beard • Facial • Grooming' },
    beautyBtn: { ro: 'Servicii Beauty →', en: 'Beauty Services →' },
    barberBtn: { ro: 'Servicii Barber →', en: 'Barber Services →' },
  },
  services: {
    label: { ro: 'MOST WANTED', en: 'MOST WANTED' },
    heading: { ro: 'Serviciile Noastre Signature', en: 'Our Signature Services' },
    bookBtn: { ro: 'Rezervă →', en: 'Book →' },
    duration: { ro: 'min', en: 'min' },
  },
  team: {
    label: { ro: 'THE TEAM', en: 'THE TEAM' },
    heading: { ro: 'Mâinile din Spatele Magiei', en: 'The Hands Behind the Magic' },
    years: { ro: 'ani experiență', en: 'years experience' },
    bookWith: { ro: 'Programare cu', en: 'Book with' },
  },
  stats: {
    clients: { ro: 'Clienți fericiți/lună', en: 'Happy clients/month' },
    years: { ro: 'Ani de activitate', en: 'Years of activity' },
    stylists: { ro: 'Stiliști & Barberi', en: 'Stylists & Barbers' },
    returning: { ro: 'Clienți care revin', en: 'Returning clients' },
  },
  testimonials: {
    label: { ro: 'REVIEWS', en: 'REVIEWS' },
    heading: { ro: 'Ce Spun Clienții', en: 'What Clients Say' },
  },
  whyUs: {
    label: { ro: 'WHY CHOOSE US', en: 'WHY CHOOSE US' },
    heading: { ro: 'Experiența Luxe', en: 'The Luxe Experience' },
    items: [
      {
        title: { ro: 'Produse Premium', en: 'Premium Products' },
        desc: { ro: 'Schwarzkopf, L\'Oréal Professionnel, Wella. Zero compromisuri pe calitate.', en: 'Schwarzkopf, L\'Oréal Professionnel, Wella. Zero quality compromises.' },
      },
      {
        title: { ro: 'Rezervare în 60s', en: 'Book in 60s' },
        desc: { ro: 'Online 24/7. Confirmare instant. Reminder automat. Fără cozi telefonice.', en: 'Online 24/7. Instant confirmation. Auto-reminder. No phone queues.' },
      },
      {
        title: { ro: 'Stiliști Certificați', en: 'Certified Stylists' },
        desc: { ro: 'Training continuu în Paris, Milano, Londra. Urmărim tendințele mondiale.', en: 'Continuous training in Paris, Milan, London. Following global trends.' },
      },
      {
        title: { ro: 'Experiență Completă', en: 'Complete Experience' },
        desc: { ro: 'Cafea, wifi, muzică ambient. Un loc unde te simți bine de la intrare.', en: 'Coffee, wifi, ambient music. A place where you feel good from the entrance.' },
      },
    ],
  },
  cta: {
    heading: { ro: 'Rezervă-ți Momentul', en: 'Book Your Moment' },
    subtitle: { ro: 'Prima vizită include consultație de styling gratuită.', en: 'First visit includes a free styling consultation.' },
    bookNow: { ro: 'Rezervă Acum →', en: 'Book Now →' },
    features: { ro: '✦ Confirmare instant ✦ Anulare gratuită ✦ Parcare disponibilă', en: '✦ Instant confirmation ✦ Free cancellation ✦ Parking available' },
  },
  footer: {
    tagline: { ro: 'Where Style Meets Perfection', en: 'Where Style Meets Perfection' },
    beautyServices: { ro: 'Servicii Beauty', en: 'Beauty Services' },
    barberServices: { ro: 'Servicii Barber', en: 'Barber Services' },
    info: { ro: 'Informații', en: 'Information' },
    address: { ro: 'Str. Victoriei 42, București', en: '42 Victoriei St., Bucharest' },
    schedule: { ro: 'L-S: 09:00-20:00 | D: 10:00-17:00', en: 'Mon-Sat: 09:00-20:00 | Sun: 10:00-17:00' },
    rights: { ro: '© 2026 Luxe Studio. Toate drepturile rezervate.', en: '© 2026 Luxe Studio. All rights reserved.' },
    madeIn: { ro: 'Made with ✦ in România', en: 'Made with ✦ in Romania' },
  },
  booking: {
    badge: { ro: 'Rezervare Online', en: 'Online Booking' },
    heading: { ro: 'Rezervă-ți Momentul Tău', en: 'Book Your Moment' },
    subtitle: { ro: 'Alege serviciul, stilistul și ora perfectă.', en: 'Choose the service, stylist and perfect time.' },
    step1: { ro: 'Categorie', en: 'Category' },
    step2: { ro: 'Serviciu', en: 'Service' },
    step3: { ro: 'Stilist & Data', en: 'Stylist & Date' },
    step4: { ro: 'Detalii', en: 'Details' },
    next: { ro: 'Continuă', en: 'Continue' },
    back: { ro: 'Înapoi', en: 'Back' },
    noPreference: { ro: 'Fără preferință', en: 'No preference' },
    firstName: { ro: 'Prenume', en: 'First Name' },
    lastName: { ro: 'Nume', en: 'Last Name' },
    phone: { ro: 'Telefon', en: 'Phone' },
    email: { ro: 'Email', en: 'Email' },
    firstVisit: { ro: 'Prima vizită?', en: 'First visit?' },
    notes: { ro: 'Note opționale', en: 'Optional notes' },
    notesPlaceholder: { ro: 'Ex: prefer scurt frontal, lungime pe spate...', en: 'Ex: prefer short front, length in the back...' },
    whatsapp: { ro: 'Doresc reminder WhatsApp cu 24h înainte', en: 'I want a WhatsApp reminder 24h before' },
    confirm: { ro: '✨ Confirmă Rezervarea', en: '✨ Confirm Booking' },
    success: { ro: 'Rezervarea Ta este Confirmată ✓', en: 'Your Booking is Confirmed ✓' },
    summary: { ro: 'Sumar Rezervare', en: 'Booking Summary' },
    arrive: { ro: 'Sosește cu 5 minute înainte', en: 'Arrive 5 minutes early' },
    parking: { ro: 'Parcare gratuită', en: 'Free parking' },
    emergency: { ro: 'Telefon pentru urgențe/modificări', en: 'Phone for emergencies/changes' },
  },
  servicesPage: {
    heading: { ro: 'Meniu Complet de Servicii', en: 'Complete Services Menu' },
    from: { ro: 'de la', en: 'from' },
  },
  contact: {
    heading: { ro: 'Hai să Vorbim', en: "Let's Talk" },
    name: { ro: 'Nume', en: 'Name' },
    email: { ro: 'Email', en: 'Email' },
    subject: { ro: 'Subiect', en: 'Subject' },
    message: { ro: 'Mesaj', en: 'Message' },
    send: { ro: 'Trimite →', en: 'Send →' },
    subjects: {
      question: { ro: 'Întrebare serviciu', en: 'Service question' },
      booking: { ro: 'Rezervare', en: 'Booking' },
      partnership: { ro: 'Parteneriat', en: 'Partnership' },
      complaint: { ro: 'Reclamație', en: 'Complaint' },
      other: { ro: 'Altul', en: 'Other' },
    },
    open: { ro: 'Deschis', en: 'Open' },
    closed: { ro: 'Închis', en: 'Closed' },
  },
  gallery: {
    heading: { ro: 'Portofoliu', en: 'Portfolio' },
    subtitle: { ro: 'Transformări reale, clienți reali.', en: 'Real transformations, real clients.' },
    all: { ro: 'Toate', en: 'All' },
    followUs: { ro: 'Urmărește-ne @luxestudio →', en: 'Follow us @luxestudio →' },
  },
} as const;

type TranslationKey = string;

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (section: string, key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'ro',
  toggleLang: () => {},
  t: () => '',
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ro');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'ro' ? 'en' : 'ro');
  }, []);

  const t = useCallback((section: string, key: string): string => {
    try {
      const s = (translations as any)[section];
      if (!s) return key;
      const entry = s[key];
      if (!entry) return key;
      if (typeof entry === 'string') return entry;
      return entry[lang] || key;
    } catch {
      return key;
    }
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

// Helper for array translations
export const getWhyUsItems = (lang: Lang) => translations.whyUs.items.map(item => ({
  title: item.title[lang],
  desc: item.desc[lang],
}));
