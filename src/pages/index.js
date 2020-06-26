import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <h2>Featured Work</h2>
    <p>Olitor &mdash; ux design, dev collaboration</p>
    <p>XR Multitasking Design Guide &mdash; ux design, innovation</p>
    <Link to="/sbc/"><p>Seattle Badminton Club &mdash; ux design</p></Link>
    <h2>&nbsp;</h2>
    <h2>More Work</h2>
    <p>🦊Mozilla &mdash; usability study</p>
    <p>👓AR Health Kit &mdash; concepting / XR concept</p>
    <p>🕹Tic Tac Toe &mdash; physical prototyping</p>
    <p>📈Story of the usability test plan &mdash; storytelling</p>
    <p>🚴🏻&zwj;♂️Cascade Bicycle Club &mdash; visual design</p>
    <p>🧑&zwj;🎓Safety Net &mdash; research driven ideation</p>
    <p>💻Contentserv &mdash; web development</p>
    
  </Layout>
)

export default IndexPage
