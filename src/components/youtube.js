import React from 'react'


const Youtube =({sourceURL}) => {
    return (
        <iframe width="560" 
        height="315" 
        src={sourceURL} 
        frameBorder="1" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true}></iframe>
    )
}
export default Youtube
