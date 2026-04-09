function ProjectForm({ form, handleChange, handleFileChange, handleSubmit, buttonText }) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'white',
        padding: '30px',
        borderRadius: '24px',
        boxShadow: 'var(--shadow)',
        display: 'grid',
        gap: '15px'
      }}
    >
      <input name="title_fr" placeholder="Titre FR" value={form.title_fr} onChange={handleChange} style={inputStyle} />
      <input name="title_en" placeholder="Titre EN" value={form.title_en} onChange={handleChange} style={inputStyle} />
      <input name="title_ar" placeholder="Titre AR" value={form.title_ar} onChange={handleChange} style={inputStyle} />

      <textarea name="description_fr" placeholder="Description FR" value={form.description_fr} onChange={handleChange} rows="4" style={inputStyle}></textarea>
      <textarea name="description_en" placeholder="Description EN" value={form.description_en} onChange={handleChange} rows="4" style={inputStyle}></textarea>
      <textarea name="description_ar" placeholder="Description AR" value={form.description_ar} onChange={handleChange} rows="4" style={inputStyle}></textarea>

      <input name="category" placeholder="Catégorie" value={form.category} onChange={handleChange} style={inputStyle} />
      <input name="sort_order" type="number" placeholder="Ordre" value={form.sort_order} onChange={handleChange} style={inputStyle} />

      <label>
        <input
          type="checkbox"
          name="is_featured"
          checked={form.is_featured}
          onChange={(e) => handleChange({
            target: {
              name: 'is_featured',
              value: e.target.checked
            }
          })}
        />
        {' '}Projet vedette
      </label>

      <input type="file" name="image" onChange={handleFileChange} style={inputStyle} />

      <button type="submit" className="btn btn-primary">{buttonText}</button>
    </form>
  );
}

const inputStyle = {
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid var(--border)',
  width: '100%'
};

export default ProjectForm;