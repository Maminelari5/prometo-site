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
    const value =
      e.target.name === 'is_featured' ? e.target.checked : e.target.value;

    setForm({ ...form, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title_fr', form.title_fr || '');
    data.append('title_en', form.title_en || '');
    data.append('title_ar', form.title_ar || '');
    data.append('description_fr', form.description_fr || '');
    data.append('description_en', form.description_en || '');
    data.append('description_ar', form.description_ar || '');
    data.append('category', form.category || '');
    data.append('sort_order', form.sort_order || 0);
    data.append('is_featured', form.is_featured ? 1 : 0);

    if (form.image) {
      data.append('image', form.image);
    }

    try {
      await api.post(`/admin/projects/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Projet modifié avec succès');
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('EDIT PROJECT ERROR:', err);
      console.error('response data:', err.response?.data);
      alert(JSON.stringify(err.response?.data, null, 2));
    }
  };

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-dark)' }}>
        Modifier le projet
      </h1>

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