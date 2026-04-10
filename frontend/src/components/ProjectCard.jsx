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
  src={
    project.image ||
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  }
  alt={project.title}
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "16px"
  }}
/>

  <div style={{
  position: 'absolute',
  top: '10px',
  left: '10px',
  background: 'white',
  padding: '6px 12px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
}}>
  <img src="/logo.png" style={{ height: '20px' }} />
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