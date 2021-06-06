import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home"
import About from "../components/About"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Surya - Full Stack Developer" />
    <Home />
    <About />
    <Footer />


    {/* <StaticImage
      src="../images/logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
    </p>
  </Layout>
)

export default IndexPage
