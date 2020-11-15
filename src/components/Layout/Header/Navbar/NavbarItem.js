import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavbarItem = ({ key, label, url }) => {

  return (
    <li key={ key } >
      <Link to={ url }>
        { label }
      </Link>
    </li>
  )
}

export default NavbarItem

NavbarItem.propTypes = {
  key: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}