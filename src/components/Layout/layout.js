import React from "react"
import PropTypes from "prop-types"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Header from "./Header/Header"
import { useCommonDataQuery } from "../../data/useCommonDataQuery"
import styles from "./layout.module.scss"


const Layout = ({ children }) => {

  const { site } = useCommonDataQuery()
  return (
    <>
      <Header siteTitle={site.siteMetadata?.title || `Title`}
              siteDescription={site.siteMetadata?.description || `Description`} />
      <div className={ styles.wrapper }>

        <main>
          {children}
          {/*<Container fluid >*/}
          {/*  <Row>*/}

          {/*    { sidebar && (*/}
          {/*      <>*/}
          {/*        <Col md={4} sm={12}>*/}
          {/*          { sidebar }*/}
          {/*        </Col>*/}
          {/*        <Col md={8} sm={12}>*/}
          {/*          { children }*/}
          {/*        </Col>*/}
          {/*      </>*/}
          {/*    )}*/}
          {/*    { !sidebar && ( <Col>{ children }</Col> )}*/}

          {/*  </Row>*/}
          {/*</Container>*/}
        </main>

        <footer className={ styles.footer } >
          © {new Date().getFullYear()},
          {' '}
          { site.siteMetadata.organization }
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
