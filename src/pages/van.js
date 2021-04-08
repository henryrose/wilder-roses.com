import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar";
import SEO from "../components/seo"

import VanImage from "../components/VanImage";
import Section from "../components/section"; 
import VanGallery from "../components/VanGallery";

import ContactForm from "../components/ContactForm"

const VanPage = () => (
  <Layout>
    <Navbar />
    
    <div className="van-page-header">
      <Section>
        <SEO title="2011 Freightliner Sprinter For Sale" />
        <h1 className="title">Sprinter Van For Sale</h1>
      </Section>
      <VanImage />
    </div>
      
      
    <Section>
      <h2 className="title is-2">Our Vanstory</h2>
      <p>For the first 60 days of 2021 this van housed our family on an epic 7500 mile road trip through the western United States.  It kept us warm on cold nights, kept us dry in coastal rain storms and carried us safely both on gravel backroads and on the highway. We love this van!</p>
      <p>Sadly, we won't have another chance to travel like this for some time, so it's time for the van to move on to a new family.</p>
      <p>We purchased this van with a different camper interior that did not meet our needs.  We spent two months re-building it from the metal up. We documented this process with many pictures and are happy to share any details of the build.</p>
      <p><ContactForm /></p>
    </Section>
    <div className="columns">
      <div className="column">
        <Section>
          <h3 className="title is-3">Basics</h3>
            <ul className="disc">
              <li>2011 Freightliner Sprinter 2500</li>
              <li>V6 Turbodiesel</li>
              <li>Rear wheel drive</li>
              <li>144" wheel base</li>
              <li>High roof</li>
              <li>152,XXX Miles</li>
              <li>Extensive service records</li>
              <li>Clean title</li>
            </ul>
          </Section>
      </div>
      
      <div className="column">
        <Section>
          <h3 className="title is-3">Camping</h3>
          <ul className="disc">
              <li>Rigid foam + spray foam insulation</li>
              <li>Dimmable LED ceiling lights</li>
              <li>Cedar tounge and groove walls</li>
              <li>12v fridge on fridge slide</li>
              <li>Stainless steel sink with marine grade handpump</li>
              <li>13 gallon onboard water tank</li>
              <li>5 gallon onboard grey water tank</li>
              <li>Convertable bed/couch</li>
              <li>Passenger side seat swivel</li>
              <li>Diesel cabin heater</li>
              <li>Insulated window covers</li>
              <li>Brand new (April 7, 2021) house batteries</li>
              <li>1500W charger/interver</li>
              <li>Shorepower plug</li>
              <li>Roof rails for rack/solar/awning</li>
              <li>Entryway step stool</li>
              <li>Water tank fill hose with inline filter</li>
              <li>Roof mounted Fantastic Fan</li>
              <li> CR Lawrence "t-vent" window in sliding door</li>
              <li> CR Lawrence tinted windows in rear doors</li>
            </ul>
        </Section>
      </div>

      <div className="column">
        <Section>
          <h3 className="title is-3">Driving</h3>
          <ul className="disc">
              <li>17" Method Racing wheels</li>
              <li>All Terrain Tires: Falken Wildpeak AT3 265 /70 R17</li>
              <li>Stock wheels and tires included</li>
              <li>Full size spare tire</li>
              <li>Aftermarket stereo with Apple Carplay</li>
              <li>Factory tow hitch</li>
            </ul>
        </Section>
      </div>
      <div className="column">
        <Section>
          <h3 className="title is-3">Safety</h3>
          <ul className="disc">
              <li>Backup Camera</li>
              <li>Carbon Monoxide detector</li>
              <li>Fire extinguisher</li>
              <li>Tire chains</li>
            </ul>
        </Section>
      </div>
    </div>
    <Section>
      <h2 className="title is-2">Price: $41,500</h2>
      <ContactForm />
    </Section>
    <div style={{
          
    }}>
      <VanGallery />
    </div>      
  </Layout>
)



export default VanPage
