import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Fonts from './components/Fonts'
import {useState} from 'react'

function App() {

  const [preview, setPreview] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");

  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <Aside preview={preview} setPreview={setPreview} />
          <Fonts preview={preview}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
