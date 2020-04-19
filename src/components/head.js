import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import "../assets/css/main.css"
import "../assets/sass/main.scss"


const Head = ({title}) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)

return (
<Helmet title ={`${title} | ${data.site.siteMetadata.title}`}>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="/assets/css/main.css" />
        
</Helmet>
)

}

export default Head