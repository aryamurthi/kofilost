import React from "react"
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Footer = () => {
  return (
      <div id="wrapper" className="fade-in">
    <div id="copyright">
      <ul className="icons alt">
        <li> ©2020 Fii Entertainment</li>
        <li>
          <a href="https://open.spotify.com/artist/2q6vsz9pQkIIAYVmANAj61" className="icon brands alt fa-spotify">
            <span className="label">Spotify</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/imnotkofi/" className="icon brands alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/kofilost" className="icon brands alt fa-soundcloud">
            <span className="label">Soundcloud</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/imnotkofi" className="icon brands alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          Template: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
