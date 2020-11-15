import React from "react"
import NavbarItem from "./NavbarItem"
import styles from "./navbar.module.scss"
import { links } from "./links"
// import { isAuthenticated } from "../utils/auth"

const Navbar = () => {

  return (
    <ul className={ styles.main }>
      { links.map( (item, key) => {
        // if( item.isProtected && !isAuthenticated() )
        //   return null
        // else
        return (
          <NavbarItem key={ key } label={ item.label } url={ item.url } />
        )})}
    </ul>
  )
}

export default Navbar