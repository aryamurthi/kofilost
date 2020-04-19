import React from "react"
import { Link } from "gatsby"
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Nav = () => {
  return (
    <div>
      <nav id="nav">
        <ul className="links">
          <li className="active">
            <Link to="/#header">Mr. Lost is Here</Link>
          </li>
          <li className="active">
            <Link to="/music/#header">Music</Link>
          </li>
          <li className="active">
            <Link to="/losttalk/#header">Lost Talk</Link>
          </li>
          <li className="active">
            <Link to="/foundfootage/#header">Found Footage</Link>
          </li>
          <li className="active">
            <Link to="/contact/#header">Contact</Link>
          </li>
          
        </ul>
        <ul className="icons">
          <li>
            <a
              href="https://soundcloud.com/kofilost"
              className="icon brands fa-soundcloud"
            >
              <span className="label">Soundcloud</span>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/2q6vsz9pQkIIAYVmANAj61"
              className="icon brands fa-spotify"
            >
              <span className="label">Spotify</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/imnotkofi/"
              className="icon brands fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/imnotkofi"
              className="icon brands fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
