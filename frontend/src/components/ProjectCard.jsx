import { useTranslation } from 'react-i18next';

const BACKEND_URL = 'https://prometo-site-production.up.railway.app';

function ProjectCard({ project }) {
  const { i18n } = useTranslation();

  const imageUrl = project.image
    ? `${BACKEND_URL}/storage/${project.image}`
    : 'https://images.unsplash.com/photo-1503387762-592deb58ef4e';

  const currentLang = i18n.language;

  const title =
    currentLang === 'ar'
      ? project.title_ar
      : currentLang === 'en'
      ? project.title_en
      : project.title_fr;

  const description =
    currentLang === 'ar'
      ? project.description_ar
      : currentLang === 'en'
      ? project.description_en
      : project.description_fr;

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)'
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '260px', objectFit: 'cover' }}
        />

        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(6px)',
            borderRadius: '12px',
            padding: '8px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
          }}
        >
          <img
            src="/logo.png"
            alt="PROMETO"
            style={{
              width: '24px',
              height: '24px',
              objectFit: 'contain'
            }}
          />
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              color: 'var(--primary-dark)'
            }}
          >
            PROMETO
          </span>
        </div>
      </div>

      <div style={{ padding: '22px' }}>
        <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>
          {project.category || 'Projet'}
        </p>
        <h3 style={{ marginBottom: '12px' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
          {description?.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;