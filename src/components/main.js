import React from "react"
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Main = (props) => {

    return (
        <div id="wrapper" className= "fade-in">
<div id="main">
    <article className="post featured">
      <header className="major">
        {props.children}
      </header>
    </article>
  </div>
  </div>
    )
}

export default Main
