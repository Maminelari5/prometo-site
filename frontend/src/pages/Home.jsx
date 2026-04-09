import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import api from '../services/api';

function Home() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then((res) => setProjects(res.data.slice(0, 3)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const services = [
    {
      title: t('home.services.s1'),
      desc: t('home.serviceDesc')
    },
    {
      title: t('home.services.s2'),
      desc: t('home.serviceDesc')
    },
    {
      title: t('home.services.s3'),
      desc: t('home.serviceDesc')
    },
    {
      title: t('home.services.s4'),
      desc: t('home.serviceDesc')
    }
  ];

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={t('home.expertiseTitle')}
            subtitle={t('home.expertiseText')}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px'
            }}
          >
            {services.map((item, i) => (
              <div key={i} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/logo.png" alt="PROMETO" className="flip-logo" />
                  </div>

                  <div className="flip-card-back">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title={t('home.projectsTitle')}
            subtitle={t('home.projectsText')}
          />

          {loading ? (
            <Loader />
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px'
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;