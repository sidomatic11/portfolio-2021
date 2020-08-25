import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Timeline from "../components/timeline"
// import Menu from "../components/menu"
// import SEO from "../components/seo"
import ImgProfile from "../images/profile.png"

const AboutPage = () => (
  <Layout sAddClass="aboutPage">
    <h1>Hello! I’m Siddhant Patil 🙂</h1>
    <img src={ImgProfile}></img>
    <p>
      I recently graduated with a Masters in Human Centered Design and
      Engineering from the University of Washington and have been working part
      time as a UX Designer at UW School of Nursing. Previously, I have worked
      as a software developer for two years after completing bachelors in
      Computer Engineering.
    </p>
    <p>🦄 <span>Human Centered Designer</span></p>
    <p>🛠 Creative problem solver</p>
    <p>👓 XR enthusiast</p>
    <p>🧐 Critical Thinker </p>
    <p>💪🏽 Enjoys working on challenging problems</p>
    <p>🌿 Loves philosophical and spiritual discussions</p>
    <p className="br-l">🤣 Occassionally makes insider memes</p>

    <h3>How I think about the role of Design in Technology —</h3>
    <p className="br-l">
      Design, to the world of technology, is what &lsquo;the Force&rsquo; is to
      the world of Star Wars. Omnipresent and eternal, it always plays its part,
      whether you are aware of it or not. Simple technologies can become strong
      with its support while the other complex, feature rich ones can become
      weak without it. It is neutral in itself, but has the potential for good
      or bad based on how it is wielded. Our duty as the creators of
      technology is to use this Force positively and responsibly.
    </p>

    <h3 className="br-l">
      <a href="https://bit.ly/3gavqzw" target="_blank" rel="noreferrer">
        <span className="link">View Resume</span>
      </a>
    </h3>

    <br />
  </Layout>
)

export default AboutPage
