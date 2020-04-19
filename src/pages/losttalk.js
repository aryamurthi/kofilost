import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Footer from "../components/footer"
import Button from "../components/button"
import Blog from "../components/blog"
import lostStyles from "./losttalk.module.scss"
import Divider from "../components/divider"
import Navbar from "../components/Navbar/Navbar"

import { Link, graphql, useStaticQuery } from "gatsby"

import "../assets/css/main.css"
import "../assets/sass/main.scss"


const LostTalk = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      <Navbar></Navbar>
      <Head title="Lost Talk"></Head>
      <Title></Title>
      <Logo linkURL="/losttalk/#header" title="Lost Talk"></Logo>

      <div id="wrapper" ><h1></h1></div>
      

      <Nav></Nav>

      <Blog>
      <header className="major"><span className="date">Read</span></header>

        <center>{data.allContentfulBlogPost.edges.map(edge => {
          return (
           <div>
              <span className="date">{edge.node.publishedDate}</span>
              <h2>
                <Link to={`/losttalk/${edge.node.slug}`}>
                  {edge.node.title}
                </Link>
              </h2>

                <p><center>{edge.node.excerpt}</center></p>
              
              <div className ={lostStyles.post}><Button  linkURL={`/losttalk/${edge.node.slug}/#header`} title="Full Story"></Button></div>
              
              <Divider></Divider>

            </div>
          )
        })}</center>
    </Blog>

      

      <Footer></Footer>
    </div>
  )
}

export default LostTalk
