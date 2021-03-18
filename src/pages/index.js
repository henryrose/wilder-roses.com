import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"

import SEO from "../components/seo"

import familyPicture from "../images/family-picture.jpg"
import LandingPageSplashPicture from "../components/LandingPageSplashPicture"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <section className="section">
      <div className="columns">
      <div className="column">
          <div class="container">      
            <section class="hero ">
              <div class="hero-body">
                <SEO title="wilderroses" />
                <p className="title"> We are the Wilderroses</p>    

                <p class="subtitle">
                Amanda, Henry, Sandwich, and Stella!
                </p>
              </div>
            </section>
            </div>
          </div>
        <div className="column">
          <div class="container">
              <LandingPageSplashPicture />
          </div>
        </div>
      </div>
    </section>
    


  </Layout>
)

export default IndexPage
