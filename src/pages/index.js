import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import familyPicture from "../images/family-picture.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="wilderroses" />
    <h1>We are the Wilderroses</h1>
    <p>Amanda, Henry, Sandwich, and Stella!</p>
    
    <img src={familyPicture} alt="the wilder.rose family"/>

    <Link to="/van">Van</Link>


  </Layout>
)

export default IndexPage
