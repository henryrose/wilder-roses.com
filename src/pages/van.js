import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import VanImage from "../components/VanImage";


const VanPage = () => (
  <Layout>
    <SEO title="2011 Freightliner Sprinter For Sale" />
    <h1>Sprinter Van For Sale</h1>

    <div className="container">
    `  <div className="vanhero">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, display: 'inline-block', height: '400px' }}>
          <VanImage />
        </div>
      </div>
        
      <div>
      <p>For the first 60 days of 2021 this van housed our family on an epic 7500 mile road trip.</p>

      <h2>The Basics</h2>
        <ul>
          <li>2011 Freightliner Sprinter 2500</li>
          <li>V6 Turbodiesel two wheel drive</li>
          <li>144 high roof</li>
          <li>150,XXX Miles</li>
        </ul>
      </div>
      
    </div>
    <Link to="/">Go back to the homepage</Link>`
  </Layout>
)



export default VanPage
