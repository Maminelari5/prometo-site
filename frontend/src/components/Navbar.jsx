import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 0'
      }}>
        <Link
  to="/"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none'
  }}
>
  <img
    src="/logo.png"
    alt="PROMETO"
    style={{
      width: '40px',
      height: '40px',
      objectFit: 'contain',
      transition: 'transform 0.3s'
    }}
  />

  <span
    style={{
      fontSize: '1.8rem',
      fontWeight: '800',
      color: 'var(--primary-dark)'
    }}
  >
    PROMETO
  </span>
</Link>

        <nav style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/realisations">{t('nav.projects')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
          <Link to="/admin" className="btn btn-primary">{t('nav.admin')}</Link>

          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              padding: '8px 10px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;