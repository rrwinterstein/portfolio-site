import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"
import Footer from "../components/footer"

import "../global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Robert Winterstein" />
    <Hero />
    <About />
    <Work />
    <Footer />
  </Layout>
)

export default IndexPage
