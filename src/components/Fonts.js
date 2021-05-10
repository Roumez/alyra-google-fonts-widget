import { useEffect, useState } from "react"
import Font from './Font'
import GoogleFontLoader from 'react-google-font-loader'

const Fonts = ({ preview, size, filter, darkMode }) => {

  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true);
    setError('')
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_DEVELOPER_API_KEY}&&sort=${filter}`
    )
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Mauvaise manip ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.items.slice(0, 10));
        setFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        setFonts([]);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filter])

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        {loading ?
          (<p className="text-center fs-4">Loading...</p>) : (
            <h2 className="mb-3">
              <span className={darkMode ? "badge bg-info text-dark" : "badge bg-danger"}>
                {filter === "date" && "Les plus récentes"}
                {filter === "popularity" && "Les plus populaires"}
                {filter === "trending" && "Top 10 trending"}
                {filter === "style" && "Les plus variées"}
              </span>
            </h2>
          )}
        {fonts.length > 0 && <GoogleFontLoader
          fonts={fonts.map((el) => (
            {
              font: el.family
            }
          ))}
          subsets={["latin"]}
        />}
        {!loading && fonts.map((el) => {
          return (
            <Font
              family={el.family}
              variants={el.variants}
              category={el.category}
              preview={preview}
              key={el.family}
              size={size}
              darkMode={darkMode}
            />
          );
        })}
        {error && <p className="alert alert-danger" >{error}</p>}
      </section>
    </div>
  );
}

export default Fonts