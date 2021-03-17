import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import familyPicture from "../images/family-picture.jpg"
import LandingPageSplashPicture from "../components/LandingPageSplashPicture"

const IndexPage = () => (
  <Layout>
    <section className="section">
      <div class="container">
        <SEO title="wilderroses" />
        <h1 className="title"> We are the Wilderroses</h1>
        <p>Amanda, Henry, Sandwich, and Stella!</p>
      </div>
      <div class="container">
        <LandingPageSplashPicture />
      </div>
        


        <Link to="/van">Van</Link>
    </section>
    


  </Layout>
)

export default IndexPage
