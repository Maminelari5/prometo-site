import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api'; 
import { useTranslation } from 'react-i18next';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: 'linear-gradient(135deg, #e9f0f3, #f8fbfc)'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'white',
          padding: '35px',
          borderRadius: '24px',
          boxShadow: 'var(--shadow)',
          display: 'grid',
          gap: '16px'
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'var(--primary-dark)' }}>Admin PROMETO</h2>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border)' }}
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border)' }}
        />

        <button className="btn btn-primary" type="submit">Se connecter</button>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
  <Link
    to="/"
    style={{
      color: 'var(--primary-dark)',
      textDecoration: 'underline',
      fontSize: '0.95rem'
    }}
  >
    {i18n.language === 'ar'
      ? 'الرجوع إلى الصفحة الرئيسية'
      : i18n.language === 'en'
      ? 'Back to home'
      : "Revenir à l'accueil"}
  </Link>
</div>
      </form>
    </div>
  );
}

export default Login;