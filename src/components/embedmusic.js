import React from 'react'
import "../assets/css/main.css"
import "../assets/sass/main.scss"


const Embed=({sourceURL})=> {
    return (
        <iframe
        width="300" 
        height="300" 
        frameBorder="1" 
        allowtransparency="true" 
        allow="encrypted-media"
          src={sourceURL}
        ></iframe>
    )
}
export default Embed