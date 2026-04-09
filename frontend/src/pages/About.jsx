import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">

        <h2 style={{
          textAlign: 'center',
          color: 'var(--primary-dark)',
          marginBottom: '10px'
        }}>
          {t('about.title')}
        </h2>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          marginBottom: '30px'
        }}>
          {t('home.expertiseText')}
        </p>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: 'var(--shadow)',
          lineHeight: 1.8,
          color: 'var(--text-muted)'
        }}>
          {t('about.text')}
        </div>

      </div>
    </section>
  );
}

export default About;