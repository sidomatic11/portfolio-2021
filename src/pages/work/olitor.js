import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

import oImgCover from "./../../images/project_olitor/cover.png"

const Olitor = () => (
  <Layout>
    <Link to="/work/">back</Link>

    <h1>Olitor App – UW School of Nursing</h1>

    <p>Oct 2019 – Present</p>

    <img src={oImgCover} alt="cover image"></img>

    <p>
      Research shows that the most common preventable cause of death in the
      aging population is poor nutrition. Adherence to the Mediterranean Diet
      delays the onset of frailty in this population. Dr. Oleg Zaslavsky has a
      vision of introducing a scalable behavior change intervention in the form
      a mobile app to help older adults adhere to this diet.
    </p>

    <h4>Goal</h4>
    <p>
      Build a patient facing mobile app for older adults to help them adhere to
      mediterranean diet. I was handed an existing in-progress design that I
      took forward to completion.
    </p>

    <h4>Users</h4>
    <p>Older adults above the age of 65. No cognitive impairments.</p>

    <h4>My Role</h4>
    <p>
      Solo designer (mobile app) — ideation, design, interactive prototype,
      usability
      <br/>
    Consultant (entire platform) — design and development strategy</p>

    <h4>Team</h4>
    <p>
      Daniella Kim (usability)
      <br></br> 
      Tactica Inc. (development)
    </p>
  </Layout>
)

export default Olitor
