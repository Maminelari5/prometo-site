import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import api from '../services/api';

function Realisations() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Réalisations"
          subtitle="Une galerie de projets aluminium sur mesure signés PROMETO."
        />

        {loading ? (
          <Loader />
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Realisations;