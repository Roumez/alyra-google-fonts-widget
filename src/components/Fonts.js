const Fonts = () => {
  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger">Top 10 trending</span>
        </h2>
        <article className="col-lg-6 mb-4">
          <div className="shadow-sm border p-3 h-100">
            <h2 className="h6 d-flex aling-items-center justify-content-between">
              <span>Antonio</span><small>7 variant(s)</small>
            </h2><p><span className="badge bg-dark">SANS-SERIF</span></p>
            <p className="sample" style={{ fontFamily: 'Antonio', fontSize: '20px' }}>Portez ce vieux whisky au juge blond qui fume !? 0123456789</p>
            <a rel="noopener noreferrer" target="_blank" className="text-danger" href="https://fonts.google.com/specimen/Antonio">Voir sur Google Fonts (ouvre un nouveau tab)</a>
          </div>
        </article>
      </section>
    </div >

  )
}

export default Fonts