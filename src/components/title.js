import React from 'react'
import { Link } from 'gatsby'
import  '../assets/css/main.css'
import '../assets/css/noscript.css'
import "../assets/sass/main.scss"
import "../assets/sass/noscript.scss"

const title = () => {
    return (
<div id="wrapper" className="fade-in">
        <div id="intro">
          <h1>
            <Link to="/#header" className="Logo">Kofi Lost</Link>
          </h1>
          <p>
            Mr. Lost is here, I'm sorry for my poor attendance
          </p>
          <ul className="actions">
            <li>
              <a
                href="/#header"
                className="button icon solid solo fa-arrow-down scrolly"
              >
                Continue
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default title