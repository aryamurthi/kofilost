import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Main from "../components/main"
import Footer from "../components/footer"
import Button from "../components/button"


const Error = () => {
  return (
      <div>
    <Head title="404"></Head>
    <Title></Title>
    <Logo linkURL="/#header" title="You're in the wrong place"></Logo>
    <div id="wrapper" ><h1></h1></div>
      
    <Nav></Nav>
    <Main>
        <h3>Try Heading Home</h3>
<Button linkURL="/#header" title= "Home"></Button>
    </Main>
    <Footer></Footer>
    </div>

  )
}

export default Error
