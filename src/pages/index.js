import React from "react"
import "./global.scss" 
// import logo from "./../images/logo.svg"
// import Menu from "./../components/menu"
import Layout from "../components/layout"

require("typeface-open-sans")


const IndexPage = () => (
  <Layout isMenuAtBottom={true}>
    <div className="homePage">

      {/* <Menu/> */}

      <div className="headline">
        Siddhant is a <b className="dark">cross-disciplinary designer</b>. He cares deeply about making things as <i className="dark">efficient</i> as possible.
      </div>
      
    </div>

  </Layout>
)

export default IndexPage
