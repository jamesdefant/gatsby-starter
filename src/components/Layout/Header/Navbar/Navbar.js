import React from "react"
// import NavbarItem from "./NavbarItem"
import styles from "./navbar.module.scss"
import { links } from "./links"
import { Link } from "gatsby"
// import { isAuthenticated } from "../utils/auth"

const Navbar = () => {

  return (
    <ul className={ styles.main }>
      { links.map( (item, key) => {
        // if( item.isProtected && !isAuthenticated() )
        //   return null
        // else
        return (
          <li key={ key } >
            <Link to={ item.url }>
              { item.label }
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar