/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <header style={{
        display: "flex",
        padding: "1.45rem 1.0875rem",
        margin: "auto auto 40px auto",
        maxWidth: 960,
      }}>
        <Link to="/"  style={{'flex-grow': "10"}}><h3>Siddhant Patil</h3></Link>
        <Link to="https://www.notion.so/Portfolio-Siddhant-Patil-86ba31ee936e496b91234dd099667b85" style={{'flex-grow': "1"}}>Portfolio</Link>
        <Link to="/about/" style={{'flex-grow': "1"}}>About</Link>
      </header>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
       
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
