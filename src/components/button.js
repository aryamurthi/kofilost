import React from "react"
import { Link } from "gatsby"
import "../assets/css/main.css"
import "../assets/sass/main.scss"


const Button = ({linkURL,title}) => {

    return (
       
    <ul className="actions special">
    <li>
      <Link to={linkURL} className="button large">
        {title}
      </Link>
    </li>
  </ul>
 
  )

}
export default Button