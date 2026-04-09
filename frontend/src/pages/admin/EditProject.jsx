import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import ProjectForm from '../../components/ProjectForm';

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title_fr: '',
    title_en: '',
    title_ar: '',
    description_fr: '',
    description_en: '',
    description_ar: '',
    category: '',
    sort_order: 0,
    is_featured: false,
    image: null,
  });

  useEffect(() => {
    api.get(`/admin/projects/${id}`)
      .then((res) => {
        setForm({
          ...res.data,
          image: null,
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        data.append(key, form[key]);
      }
    });

    try {
      await api.post(`/admin/projects/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-dark)' }}>Modifier le projet</h1>
      <ProjectForm
        form={form}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        buttonText="Mettre à jour"
      />
    </div>
  );
}

export default EditProject;