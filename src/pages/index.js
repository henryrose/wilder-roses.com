import React from "react"


import Layout from "../components/layout"
import Navbar from "../components/navbar"

import SEO from "../components/seo"

import LandingPageSplashPicture from "../components/LandingPageSplashPicture"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <section className="section">
      <div className="columns">
      <div className="column">
          <div className="container">      
            <section className="hero ">
              <div className="hero-body">
                <SEO title="wilderroses" />
                <p className="title"> We are the Wilderroses</p>    

                <p className="subtitle">
                Amanda, Henry, Sandwich, and Stella! hi.
                </p>
              </div>
            </section>
            </div>
          </div>
        <div className="column">
          <div className="container">
              <LandingPageSplashPicture />
          </div>
        </div>
      </div>
    </section>
    


  </Layout>
)

export default IndexPage
