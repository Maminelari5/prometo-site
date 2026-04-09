import SectionTitle from '../components/SectionTitle';

function Services() {
  const services = [
    'Pergolas aluminium',
    'Baies vitrées coulissantes',
    'Façades vitrées',
    'Portes et fenêtres aluminium',
    'Vérandas',
    'Garde-corps',
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Nos services"
          subtitle="Des solutions esthétiques, robustes et performantes pour tous vos projets."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '25px'
        }}>
          {services.map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow)'
            }}>
              <h3 style={{ marginBottom: '14px', color: 'var(--primary-dark)' }}>{service}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Une conception sur mesure avec un rendu premium et une grande durabilité.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;