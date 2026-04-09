import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import api from '../services/api';

function Contact() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/contact', form);

      alert(
        i18n.language === 'ar'
          ? 'تم إرسال الرسالة بنجاح'
          : i18n.language === 'en'
          ? 'Message sent successfully'
          : 'Message envoyé avec succès'
      );

      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error(error);

      alert(
        i18n.language === 'ar'
          ? 'وقع خطأ أثناء الإرسال'
          : i18n.language === 'en'
          ? 'An error occurred while sending'
          : "Une erreur s'est produite lors de l'envoi"
      );
    }
  };

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.text')}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              minHeight: '100%'
            }}
          >
            <div>
              <h3
                style={{
                  marginBottom: '14px',
                  color: 'var(--primary-dark)',
                  fontSize: '1.7rem'
                }}
              >
                Informations
              </h3>

              <p
                style={{
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '18px'
                }}
              >
                {t('contact.text')}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#f7fafb',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '14px 16px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--primary-dark)',
                  color: 'white',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}
              >
                ✉
              </div>

              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    margin: 0,
                    fontWeight: '700',
                    color: 'var(--text-dark)'
                  }}
                >
                  prometo.sarl@hotmail.com
                </p>
              </div>
            </div>

            <div
              style={{
                overflow: 'hidden',
                borderRadius: '18px',
                boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                border: '1px solid var(--border)',
                minHeight: '260px'
              }}
            >
              <iframe
                title="PROMETO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3229570742647!2d-7.633861525540005!3d33.586802642165665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d294e45261c1%3A0x550f864717bf3f46!2s16%2C%20174%20Bd%20Mohammed%20Zerktouni%2C%20Casablanca%2020250!5e1!3m2!1sfr!2sma!4v1775180844272!5m2!1sfr!2sma"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow)',
              display: 'grid',
              gap: '15px'
            }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.fullName')}
              style={inputStyle}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.email')}
              style={inputStyle}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t('contact.phone')}
              style={inputStyle}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              rows="6"
              style={inputStyle}
            ></textarea>

            <button type="submit" className="btn btn-primary">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid var(--border)'
};

export default Contact;