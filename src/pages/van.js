import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import VanImage from "../components/VanImage";


const VanPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <SEO title="2011 Freightliner Sprinter For Sale" />
        <h1 className="title">Sprinter Van For Sale</h1>
        
          <div style={{
            maxWidth : '400px'
          }}>
            <VanImage />
          </div>
        <p>For the first 60 days of 2021 this van housed our family on an epic 7500 mile road trip.</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns">
            <div class="column">
              <h2 class="title is-2">The Basics</h2>
                <ul>
                  <li>2011 Freightliner Sprinter 2500</li>
                  <li>V6 Turbodiesel two wheel drive</li>
                  <li>144 high roof</li>
                  <li>150,XXX Miles</li>
                  <li>Extensive service records</li>
                </ul>
            </div>
            <div class="column">
            <h2 class="title is-2">The Buildout</h2>
            <ul>
              <li>Rigid foam + spray foam insulation</li>
              <li>Dimmable LED ceiling lights</li>
              <li>Cedar tounge and groove walls</li>
              <li>13 gallon onboard water tank</li>
              <li>Convertable bed/couch</li>
              <li>Diesel heater</li>
              <li>1500W charger/interver</li>
              <li>Shorepower plug</li>
              <li>Roof rails for rack/solar/awning</li>j
            </ul>
            </div>
          </div>

          <Link to="/">Go back to the homepage</Link>`
          </div>
      </section>
  </Layout>
)



export default VanPage
