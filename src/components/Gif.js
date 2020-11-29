import React from "react"
import "./Gif.css"
import Swal from "sweetalert2"

export default function Gif({title, id, url}){

    const handleClick = (url, title) => {
        Swal.fire({
            title: title,
            text: 'Tu gif seleccionado',
            imageUrl: url,
            imageWidth: 350,
            imageHeight: 200,
            imageAlt: title,
          })
    }
    return (
    <div className="card" >
        <small>{id}</small>
        <img className="card-img-top" alt={title} src={url}></img>
        <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text">Gif desde API Giphy</p>
            <a href="#" className="btn btn-primary" onClick={ () => handleClick(url, title) }>Ver</a>
        </div>    
  </div>  
    )
}