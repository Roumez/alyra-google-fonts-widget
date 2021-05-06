import React from 'react';


const Font = ({ family, variants, category, preview, size, darkMode }) => {


  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{family}</span><small>{variants.length} variant(s)</small>
        </h2><p><span className={darkMode ? "badge bg-warning text-dark":"badge bg-dark"}>{category.toUpperCase()}</span></p>
        <p className="sample" style={{ fontFamily: family, fontSize: size+'px' }}>{preview}</p>
        <a rel="noopener noreferrer" target="_blank" className={darkMode ? "text-info":"text-danger"} href={`https://fonts.google.com/specimen/${family.replaceAll(' ', '+')}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
      </div>
    </article>
  );
};

export default Font;