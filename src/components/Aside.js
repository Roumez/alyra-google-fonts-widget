

const Aside = ({preview, setPreview}) => {


  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: 'sticky', top: '0px' }}>
        <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
        <select id="sort" className="form-select mb-4">
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" className="form-control" value={preview} onChange={(event)=>setPreview(event.target.value)}></textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
        <input type="range" className="form-range" id="range" min="8" max="48" step="1" value="20" />
      </div>
    </div>
  )
}

export default Aside