import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <footer className="footer-pro">
      <div className="container footer-pro-top">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <img src="/logo2.png" alt="PROMETO" className="footer-logo" />
            <h3>PROMETO</h3>
          </div>

          <p className="footer-brand-text">
            {isArabic
              ? 'نُضفي لمسة راقية على فضاءاتكم بمنتجات ألمنيوم حسب الطلب.'
              : i18n.language === 'en'
              ? 'Enhance your spaces with our custom-made aluminium solutions.'
              : 'Sublimez votre habitat avec nos menuiseries en aluminium sur mesure.'}
          </p>
        </div>

        <div>
          <h4 className="footer-title">
            {isArabic ? 'التنقل' : i18n.language === 'en' ? 'Navigation' : 'Navigation'}
          </h4>

          <div className="footer-links">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/realisations">{t('nav.projects')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </div>
        </div>

        <div>
          <h4 className="footer-title">
            {isArabic ? 'إنجازاتنا' : i18n.language === 'en' ? 'Our projects' : 'Nos réalisations'}
          </h4>

          <div className="footer-links">
            <span>{isArabic ? 'برغولات ألمنيوم' : i18n.language === 'en' ? 'Aluminium pergolas' : 'Pergolas en aluminium'}</span>
            <span>{isArabic ? 'مظلات' : i18n.language === 'en' ? 'Shade sails' : 'Voiles d’ombrage'}</span>
            <span>{isArabic ? 'نجارة ألمنيوم' : i18n.language === 'en' ? 'Aluminium joinery' : 'Menuiserie aluminium'}</span>
            <span>{isArabic ? 'حلول حسب الطلب' : i18n.language === 'en' ? 'Custom solutions' : 'Solutions sur mesure'}</span>
          </div>
        </div>

        <div>
          <h4 className="footer-title">
            {isArabic ? 'اتصل بنا' : i18n.language === 'en' ? 'Contact' : 'Contact'}
          </h4>

          <div className="footer-contact">
            <p>
              <strong>Email:</strong> prometo.sarl@hotmail.com
            </p>

            <div className="footer-map-wrap">
              <iframe
                  title="PROMETO Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3229570742647!2d-7.633861525540005!3d33.586802642165665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d294e45261c1%3A0x550f864717bf3f46!2s16%2C%20174%20Bd%20Mohammed%20Zerktouni%2C%20Casablanca%2020250!5e1!3m2!1sfr!2sma!4v1775180844272!5m2!1sfr!2sma"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  loading="lazy"
                ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-pro">
        <p>© 2026 PROMETO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;