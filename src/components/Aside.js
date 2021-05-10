import DarkMode from './DarkMode'

const Aside = ({ preview, setPreview, size, setSize, filter, setFilter, darkMode, setDarkMode }) => {
  

  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: 'sticky', top: '0px' }}>
        <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
        <select id="sort" className={darkMode ? "bg-warning form-select mb-4":"bg-white form-select mb-4"} onChange={(event) => setFilter(event.target.value)}>
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
          <option value="style">Les plus variées</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" className={darkMode ? "bg-warning form-control":"bg-white form-control"} value={preview} onChange={(event) => setPreview(event.target.value)}></textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
        <input type="range" className="form-range" id="range" min="8" max="48" step="1" value={size} onChange={(event) => setSize(event.target.value)} />
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default Aside