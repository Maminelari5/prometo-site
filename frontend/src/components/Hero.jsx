import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(rgba(20,30,35,.55), rgba(20,30,35,.55)), url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop") center/cover'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '760px', color: 'white' }}
        >
          <h1 style={{
            fontSize: '3.6rem',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            {t('hero.title')}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '28px',
            maxWidth: '650px'
          }}>
            {t('hero.text')}
          </p>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/realisations" className="btn btn-primary">
              {t('hero.btnProjects')}
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              {t('hero.btnContact')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;