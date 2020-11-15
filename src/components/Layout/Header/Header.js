import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./Navbar"
import styles from "./header.module.scss"

const Header = ({ siteTitle, siteDescription }) => (
  <header className={ styles.header } >
    <div className={ styles.banner } >

      <h1 style={{ margin: 0 }}>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>

      <small className="h4 text-muted">
        {siteDescription}
      </small>

      <Navbar />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
}

export default Header
