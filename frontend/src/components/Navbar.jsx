import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        background: 'white',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0',
          gap: '20px'
        }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <img
            src="/logo.png"
            alt="PROMETO"
            style={{
              width: '42px',
              height: '42px',
              objectFit: 'contain'
            }}
          />
          <span
            style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              color: 'var(--primary-dark)',
              lineHeight: 1
            }}
          >
            PROMETO
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '8px 12px',
            fontSize: '1.4rem',
            cursor: 'pointer',
            color: 'var(--primary-dark)'
          }}
        >
          ☰
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
          <Link to="/about" onClick={closeMenu}>{t('nav.about')}</Link>
          <Link to="/services" onClick={closeMenu}>{t('nav.services')}</Link>
          <Link to="/realisations" onClick={closeMenu}>{t('nav.projects')}</Link>
          <Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link>

          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              padding: '8px 10px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'white'
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