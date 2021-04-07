import React from "react"

import VanImage from "./VanImage";
import Img from "gatsby-image"


import { useStaticQuery, graphql } from "gatsby"


const GalleryImage = (image) => {
    if (!image.image.childImageSharp){
        console.error('bad image', image)
        return(<div>bad image</div>)
    }
    return <div style={{
            flexGrow: 4,
            width: "260px"
        }}>
        <Img fluid={image.image.childImageSharp.fluid} />
    </div>;
}


const VanGallery = () => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "gallery-images" } 
      }){
        nodes{
            id
            childImageSharp {
                fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
  `)

    const images = data.allFile.nodes; 
     
    return (<div style={{
        display: "flex", 
        flexWrap: "wrap"
    }}>
        {images.map( image =>{  
            return (<GalleryImage key={image.id} image={image}/>)
        })}
    </div>); 
}

export default VanGallery; 