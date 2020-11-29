import React,{useEffect, useState} from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import getGifs from './services/getGifs'

function App() {
 const [gifs, setGifs]= useState([])
 const [busqueda, setBusqueda] = useState({})
  
  useEffect(function(){
   getGifs({'keyword':'cat'}).then(gifs => setGifs(gifs))
  }, [])
  
  const handleClick= (event) =>{
    getGifs(busqueda)
    .then(gifs => setGifs(gifs))
  }

  const handleChange= (event) =>{
    setBusqueda({
      'keyword': event.target.value
    })
  }
  
  return (
    <div className="App">
      <div className="navbar navbar-dark bg-dark blanco">Buscador de Gifs</div>
      <p className="contenido">
      <input type="text" onChange={(event) => handleChange(event)} placeholder="Ingrese gif a buscar"/>
      <button type="button" className="btn btn-primary" onClick={(event)=>handleClick(event)}>Buscar</button>
      </p>
      <div className="contenedor">
        <ListOfGifs gifs={gifs} />
      </div>  
    </div>
  )
}

export default App;
