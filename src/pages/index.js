import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Title from "../components/Title"

const pageData = {
  pageName: "Home",
  title: "Hola amigo!"
}

const IndexPage = () => (
  <Layout>
    <SEO title={ pageData.pageName } />
    <Title label={ pageData.title } />
    <p>This new Gatsby site is ready for anything.</p>
    <p>You better work!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
