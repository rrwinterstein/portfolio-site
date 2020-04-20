import React from "react"
import Layout from "../components/layout"

// Stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

// Components
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Robert Winterstein" />
    <Hero />
    <About />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
