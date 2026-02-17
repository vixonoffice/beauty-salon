import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { lang, toggleLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { to: '/', label: t('nav', 'home') },
    { to: '/servicii', label: t('nav', 'services') },
    { to: '/echipa', label: t('nav', 'team') },
    { to: '/galerie', label: t('nav', 'gallery') },
    { to: '/contact', label: t('nav', 'contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b'
          : 'bg-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--gold-border)' : 'transparent' }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-heading text-2xl font-bold italic text-primary">LUXE</span>
          <span className="font-subheading text-sm text-foreground tracking-[4px]">STUDIO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-subheading text-sm tracking-wider transition-colors duration-300 hover:text-primary ${
                location.pathname === link.to ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={toggleLang}
            className="font-subheading text-sm tracking-wider text-primary hover:text-primary-light transition-colors"
          >
            {lang === 'ro' ? 'EN' : 'RO'}
          </button>
          <a href="tel:+40720000000" className="flex items-center gap-1.5 text-foreground/60 text-sm font-body">
            <Phone size={14} />
            <span>+40 720 XXX XXX</span>
          </a>
          <Link
            to="/rezervare"
            className="font-subheading text-sm tracking-wider px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {t('nav', 'book')} →
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/rezervare"
            className="font-subheading text-xs tracking-wider px-4 py-2 border border-primary text-primary"
          >
            {t('nav', 'book')}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b overflow-hidden"
            style={{ borderColor: 'var(--gold-border)' }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-subheading text-lg tracking-wider text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'var(--gold-border)' }}>
                <button
                  onClick={toggleLang}
                  className="font-subheading text-sm text-primary"
                >
                  {lang === 'ro' ? 'EN' : 'RO'}
                </button>
                <a href="tel:+40720000000" className="text-foreground/60 text-sm font-body">
                  +40 720 XXX XXX
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
