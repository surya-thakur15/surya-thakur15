import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
    <Seo title="Surya - Full Stack Developer" />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
