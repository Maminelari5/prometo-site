import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';

const BACKEND_URL = 'https://prometo-site-production.up.railway.app';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const fetchProjects = async () => {
    try {
      const res = await api.get('/admin/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce projet ?')) return;

    try {
      await api.delete(`/admin/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem('token');
    navigate('/admin');
  };

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '15px'
        }}
      >
        <h1 style={{ color: 'var(--primary-dark)' }}>Dashboard</h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-outline">
            {i18n.language === 'ar'
              ? 'الصفحة الرئيسية'
              : i18n.language === 'en'
              ? 'Home'
              : 'Accueil'}
          </Link>

          <Link to="/admin/projects/create" className="btn btn-primary">
            {i18n.language === 'ar'
              ? 'إضافة مشروع'
              : i18n.language === 'en'
              ? 'Add project'
              : 'Ajouter projet'}
          </Link>

          <button onClick={handleLogout} className="btn btn-outline">
            {i18n.language === 'ar'
              ? 'تسجيل الخروج'
              : i18n.language === 'en'
              ? 'Logout'
              : 'Déconnexion'}
          </button>
        </div>
      </div>

      <div
        style={{
          overflowX: 'auto',
          background: 'white',
          borderRadius: '20px',
          boxShadow: 'var(--shadow)',
          padding: '20px'
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px' }}>Image</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Titre</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Catégorie</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td style={{ padding: '12px' }}>
                  {project.image ? (
                    <img
                      src={`${BACKEND_URL}/storage/${project.image}`}
                      alt=""
                      style={{
                        width: '90px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                  ) : '-'}
                </td>
                <td style={{ padding: '12px' }}>{project.title_fr}</td>
                <td style={{ padding: '12px' }}>{project.category}</td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to={`/admin/projects/${project.id}/edit`} className="btn btn-outline">
                      Modifier
                    </Link>
                    <button onClick={() => handleDelete(project.id)} className="btn btn-primary">
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;