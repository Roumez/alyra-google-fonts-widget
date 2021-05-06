import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Fonts from './components/Fonts'
import {useState} from 'react'

function App() {

  const [preview, setPreview] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
  const [size, setSize] = useState(20)
  const [filter, setFilter] = useState('date')
  const [darkMode, setDarkMode] = useState(false)

  const modeClasse = darkMode ? "bg-dark text-white" : "bg-light"

  return (
    <div className={modeClasse}>
      <Header darkMode={darkMode}/>
      <div className="container min-vh-100">
        <div className="row my-5">
          <Aside preview={preview} setPreview={setPreview} darkMode={darkMode} setDarkMode={setDarkMode} size={size} setSize={setSize} filter={filter} setFilter={setFilter}/>
          <Fonts preview={preview} size={size} darkMode={darkMode} filter={filter} />
        </div>
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App;
