import React from "react"
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Blog = props => {
  return (
      <div id="wrapper">
      <div id= "main">
    <article className="post">
        
         {props.children}

    </article>
    </div>
    </div>
  )
}
export default Blog
