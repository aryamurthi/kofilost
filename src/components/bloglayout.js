import React from "react"
import Head from "../components/head"
import Title from "../components/title"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Main from "../components/main"
import Footer from "../components/footer"
import Button from "../components/button"
import lostStyles from "../pages/losttalk.module.scss"

const BlogLayout = (props) => {
    return (
        <div>
        <Head title="Lost Talk"></Head>
        <Title></Title>
        <Logo linkURL="/losttalk/#header" title="Lost Talk"></Logo>
        <Nav></Nav>
    <Main>

        {props.children}

        <div className={lostStyles.post}><Button  linkURL = "/losttalk/#header" title="Home"></Button></div>

        </Main>
    
        <Footer></Footer>
        </div>

    )
}
export default BlogLayout