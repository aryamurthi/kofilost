import React from 'react'
import { Link } from 'gatsby'
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Logo = ({linkURL,title}) => {
    return (

        <div id="wrapper" className="fade-in">
    <header id="header">
        <Link to={linkURL} className="logo">
            {title}
         </Link>
      </header>
      </div>
    )
}
export default Logo