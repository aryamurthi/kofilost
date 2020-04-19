import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Form from "../components/form"
import Footer from "../components/footer"
import Navbar from "../components/Navbar/Navbar"

import "../assets/css/main.css"
import "../assets/sass/main.scss"

const ContactPage = props => {
  return (
    <div>
        <Navbar></Navbar>
      <Head title="Contact"></Head>
      <Title></Title>

      <Logo linkURL="/contact/#header" title="Contact"></Logo>

      <div id="wrapper" ><h1></h1></div>
      

      <Nav></Nav>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
