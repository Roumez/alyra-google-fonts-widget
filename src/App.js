import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Fonts from './components/Fonts'

function App() {
  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <Aside />
          <Fonts />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
