import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Main from "../components/main"
import Footer from "../components/footer"
import Button from "../components/button"
import Youtube from "../components/youtube"



import "../assets/css/main.css"
import "../assets/sass/main.scss"

const IndexPage = props => {
  return (
    <div>
      <Navbar></Navbar>
      <Head title="Home"></Head>
      <Title></Title>
      <Logo linkURL="/#header" title="Home"></Logo>

      <div id="wrapper" ><h1></h1></div>
      

      <Nav></Nav>
      <Main>
        <span className="date">Welcome</span>
        <header className="major">
          <h1></h1>
          <p>Afro Moses out now on all platforms!</p>

          <Youtube sourceURL="https://www.youtube.com/embed/ENyhuNUdISc"></Youtube>
          <p></p>
          <p>
            Hi, I’m Kofi. I make Black Superhero Music &trade;. I rap, write
            poetry, and make a mean pot of Jollof. I also moonlight as a
            producer under the name Fii the Wanderer. On this website, you’ll
            find any and everything there is to find out about Kofi Lost. Do you
            like what you hear, read, or see? If so, tell a friend, come to a
            show, buy a beat, or hit me on social media and say wassup (I’m
            friendly I promise).
            <p></p>
            See you when I see you.
          </p>
        </header>

        <span className="date">
          <h3>Purchase</h3>
        </span>

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

        <Button linkURL="/music/#header" title="Music"></Button>
      </Main>
      
      <Footer></Footer>
      
    </div>
    
  )
}

export default IndexPage
