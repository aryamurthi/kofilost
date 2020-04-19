import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Main from "../components/main"
import Footer from "../components/footer"
import Button from "../components/button"
import Youtube from "../components/youtube"
import Divider from "../components/divider"
import Navbar from "../components/Navbar/Navbar"

const Footage = () => {
  return (
    <div>
    <Navbar></Navbar>
      <Head title="Found Footage"></Head>
      <Title></Title>
      <Logo linkURL="/foundfootage/#header" title="Found Footage"></Logo>
      <div id="wrapper" ><h1></h1></div>
      
      <Nav></Nav>
      <Main>
        <span className="date">Watch</span>

        <h3>Afro Moses Archives: Artisanal</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/mV-E-wbb_O0"></Youtube>
        <Divider></Divider>

        <h3>"Tell me About Kofi" Live performance</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/gGcxCWMxV_0"></Youtube>
        <Divider></Divider>

        <h3>OHENE - Live at SYLA 19'</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/FvbMLuDBTx0"></Youtube>
        <Divider></Divider>

        <h3>Kofi Dadzie - "For Darkskin Niggas (after Hanif Abdurraqib)"</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/dBARTMwwqI8"></Youtube>
        <Divider></Divider>

        <h3>Kofi Dadzie - "Black Don't Crack" (CUPSI 2018)</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/5Ix9KNwid94"></Youtube>
        <Divider></Divider>

        <h3>Kofi Dadzie - "No Lives Matter"</h3>
        <Youtube sourceURL="https://www.youtube.com/embed/nxE6djXVaro"></Youtube>
        <Divider></Divider>

        <Button linkURL="/contact/#header" title="Contact"></Button>
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default Footage
