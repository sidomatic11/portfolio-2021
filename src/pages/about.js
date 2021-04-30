import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Timeline from "../components/timeline"
// import Menu from "../components/menu"
// import SEO from "../components/seo"
import ImgProfile from "../images/profile.png"

const AboutPage = () => (
  <Layout sAddClass="aboutPage">
    <div className="wrapper">
      <div className="about-image">
        <img src={ImgProfile}></img>
        <h1 className="greeting">
          <span className="white">Hi! My name is Siddhant Patil.</span> You can
          also call me Sid :)
        </h1>
      </div>
      <h3 className="about-heading">background</h3>
      <h5 className="content">
        I currently work as a UX Designer and Consultant at the UW School of
        Nursing, where I am building a digital-therapeutics platform aimed
        towards helping elderly people adhere to healthy diet. Last year, I
        completed my Master's in Human Centered Design and Engineering from the
        University of Washington. I come to design from a Computer Engineering background and 
      </h5>
      <h3 className="about-heading">strengths</h3>
      <h5 className="content mid">
        The cross-disciplinary background allows me to bridge the gaps between
        research, design and engineering.
      </h5>
      <h5 className="content mid">
        When designing solutions I think not only about the interface, but also
        about how the entire system works; how the different parts connect with
        each other and work together. This ability helps me keep my team
        grounded and ensure that our designs are practical.
      </h5>
      <h5 className="content">
        I work best in dynamic environments, with a passion for making things as
        efficient and effective as possible.
      </h5>
      <h3 className="about-heading">design philosophy</h3>
      <h5 className="content last">
        I believe that Design is just like the Force from Star Wars. It is
        omnipresent and eternal. It always plays its part, regardless of our
        cognizance. Simple technologies can become strong with its support while
        complex, feature-packed ones can be weak without it. It is neutral in
        itself and has the potential for good or evil. Our duty as the creators
        of technology is to wield this Force positively and responsibly.
      </h5>
    </div>
  </Layout>
)

export default AboutPage
