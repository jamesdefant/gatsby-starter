import React from "react"
import NavbarItem from "./NavbarItem"
import "./navbar.scss"
// import { isAuthenticated } from "../utils/auth"

const links = [
  { label: `Page 2`, url: `/page-2`},
  { label: `Typescript`, url: `/using-typescript`},
  // { label: `Dashboard`, url: `/dashboard`, isProtected: true},
]

const Navbar = () => {

  return (
    <ul className="navbar-main">
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