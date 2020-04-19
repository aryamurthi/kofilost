import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Main from "../components/main"
import Footer from "../components/footer"
import Button from "../components/button"
import Embed from "../components/embedmusic"
import Navbar from "../components/Navbar/Navbar"


import "../assets/css/main.css"
import "../assets/css/noscript.css"

import "../assets/sass/main.scss"
import "../assets/sass/noscript.scss"

const IndexPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Head title ="Music"></Head>
      <Title></Title>

      <Logo linkURL="/music/#header" title="Music"></Logo>
      <div id="wrapper" ><h1></h1></div>
      

      <Nav></Nav>

      <Main>
        <span className="date">Listen</span>

        <div className="column">
          <h4>
            {" "}
            <a>Studio Album: Afro Moses</a>
          </h4>
          <Embed sourceURL="https://open.spotify.com/embed/album/4C3uDffjZIYo6YXh0ctfP3"></Embed>
        </div>

        <div className="column">
          <h4>
            {" "}
            <a>Mixtape: Ohene</a>
          </h4>
          <Embed sourceURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/713957466&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&samp;how_user=true&amp;show_reposts=false&amp;show_teaser=true"></Embed>
        </div>

        <div className="column">
          <h4>
            {" "}
            <a>Single: Last Week</a>
          </h4>
          <Embed sourceURL="https://open.spotify.com/embed/track/1eCHPZsT6Vg5JUgKF5b4bT"></Embed>
        </div>

        <h3>Purchase</h3>

        <iframe
          width="350"
          height="300"
          frameBorder="0"
          src="https://bandcamp.com/EmbeddedPlayer/album=1205198071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://kofilost.bandcamp.com/album/afro-moses">
            AFRO MOSES by Kofi Lost
          </a>
        </iframe>
        <p></p>

        <Button linkURL="/contact/#header" title="Contact"></Button>
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
