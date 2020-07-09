import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Timeline from "../components/timeline"
// import Menu from "../components/menu"
// import SEO from "../components/seo"

// const AboutPage = () => (
//   <Layout>
//     {/* <SEO title="About" /> */}

//     <h2>About Me</h2>
//     <p>&lt;Picture&gt;</p>
//     <p>Pitch</p>
//     <p>Story</p>
//     <p>Social links</p>
//     <p>Testimonials</p>
//     <p>Tags that describe me</p>
//     <p>&nbsp;</p>

//   </Layout>
// )

const AboutPage = () => (
  <Layout>
    <div className="aboutPage">
      <br />

      <h3>Hello, I'm Siddhant! &nbsp; :)</h3>
      <ul>
        <li>Human Centered Designer</li>
        <li>
          Wears different hats (designer, researcher, engineer, artist)
          depending on what the situation calls for
        </li>
        <li>Creative Problem Solver</li>
        <li>XR Enthusiast</li>
        <li>Critical Thinker</li>
        <li>Enjoys challenging problems</li>
        <li>Loves philosophical and spiritual discussions</li>
        {/* <li>STAR WARS (icons for favorite shows)</li> */}
        <li>#GoodVibesOnly #GrowthMindset #ChangeIsTheOnlyConstant #StartWithWhy</li>
        <li>Occasionally makes insider memes</li>
      </ul>

      <br />
      <br />

      <h3>How I think about the role of Design in Technology</h3>
      <p>
        Design, to the world of technology, is what &lsquo;the Force&rsquo; is
        to the world of Star Wars. Omnipresent and eternal, it always plays its
        part, whether you are aware of it or not. Simple technologies can become
        strong with its support while the other complex, feature rich ones can
        become weak without it. It is neutral in itself, but has the potential
        for good as well as evil based on how it is wielded. Our duty as the
        creators of technology is to use this Force positively and
        responsibly.
      </p>

      <br />
      <br />

      <Timeline />

      <br/>
      <br/>

      <h3>Get in touch</h3>
      <p>sid11@uw.edu</p>
      <p><a href="https://www.linkedin.com/in/patilsiddhant/">LinkedIn</a></p>
      <p><a href="https://twitter.com/sidomatic11">Twitter</a></p>

      <br/>
      <br/>

    </div>
  </Layout>
)

export default AboutPage
