import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Fonts from './components/Fonts'
import { useState, useEffect } from 'react'

function App() {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("dark-mode") || window.matchMedia('(prefers-color-scheme: dark)').matches)
  }

  const [preview, setPreview] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
  const [size, setSize] = useState(20)
  const [filter, setFilter] = useState('date')
  const [darkMode, setDarkMode] = useState(getTheme)

  useEffect(() => {
    document.documentElement.lang = "fr"
    document.title = "React Google Fonts Widget"
    document.getElementsByName('description')[0]['content'] = "Accès rapide aux dernières polices les plus récentes, les plus trendy et les plus populaires."
  }, [])

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    const handleThemeChange = (e) => {
      e.matches ? setDarkMode(true) : setDarkMode(false)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange)
    return () => {
      window.removeEventListener('change', handleThemeChange)
    }
  }, [])

  const modeClasse = darkMode ? "bg-dark text-white" : "bg-light"

  return (
    <div className={modeClasse}>
      <Header darkMode={darkMode} />
      <main className="container min-vh-100">
        <div className="row my-5">
          <Aside preview={preview} setPreview={setPreview} darkMode={darkMode} setDarkMode={setDarkMode} size={size} setSize={setSize} filter={filter} setFilter={setFilter} />
          <Fonts preview={preview} size={size} darkMode={darkMode} filter={filter} />
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App;
