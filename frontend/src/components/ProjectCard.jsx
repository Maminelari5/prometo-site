import { useTranslation } from 'react-i18next';

function ProjectCard({ project }) {
  const { i18n } = useTranslation();

  const imageUrl = project.image
    ? `http://127.0.0.1:8000/storage/${project.image}`
    : 'https://via.placeholder.com/600x400';

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
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ position: 'relative' }}>
  <img
  src={project.image || "/logo.png"}
  alt={project.title}
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