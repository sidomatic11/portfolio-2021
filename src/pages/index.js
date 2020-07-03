import React from "react"
import "./global.scss" 
// import logo from "./../images/logo.svg"
import Menu from "./../components/menu"

require("typeface-open-sans")
// import Layout from "../components/layout"

// import { Link } from "gatsby"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     {/* <SEO title="Home" /> */}
//     <div style={{"height":"500px"}}>
//       <p>Siddhant is a <b>cross-disciplinary designer</b>. He cares deeply about making things as <i>efficient</i> as possible.</p>
//     </div>
    
//   </Layout>
// )

const IndexPage = () => (
  <>
    <div className="homePage">

      <div className="headline">
        Siddhant is a <b className="dark">cross-disciplinary designer</b>. He cares deeply about making things as <i className="dark">efficient</i> as possible.
      </div>
      
      <Menu/>

    </div>

  </>
)

export default IndexPage
