import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Title from "../components/Title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title label="404: Not Found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
