import {useEffect, useState} from "react"
import Font from './Font'

const Fonts = ({preview}) => {

const [fonts, setFonts] = useState([]);

useEffect(() =>{
  fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCQ_p-Bgke9T7GjRG2EX1inqD-cGZm0JVE&&sort=trending`)
    .then((response) =>{
      console.log(response);
      if(!response.ok){
        throw new Error(`Mauvaise manip ${response.status}}`);
      }
      return response.json()
    })
    .then((data) =>{
      console.log(data.items.slice(0, 10))
      setFonts(data.items.slice(0, 10))
    })
    .catch((error) => {
      console.error(error.message)
    })
}, [])

  return (

  <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger">Top 10 trending</span>
        </h2>
        {fonts.map((el) => {
          return(
          <Font family={el.family} variants={el.variants} category={el.category} preview={preview}/>
          )
        })}
      </section>
    </div >

  )
}

export default Fonts