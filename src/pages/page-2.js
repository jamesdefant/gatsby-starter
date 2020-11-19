import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Title from "../components/Title"

const pageData = {
  pageName: "Page two",
}

const SecondPage = () => (
  <Layout>
    <SEO title={ pageData.pageName } />
    <Title label={ pageData.pageName } />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
