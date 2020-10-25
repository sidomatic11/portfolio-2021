import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

import oImgXRM from "../images/olitor.gif"

const TestPage = () => {
  return (
    <Layout>
      <div class="wrapper">
        <div class="grid-item intro">
          Hello There! I’m Siddhant.
          <br />
          User Experience Designer would be one way of describing me.
          <br />
          but I’d prefer — Creative Problem Solver :)
        </div>

        <div class="grid-item featured">Featured Work</div>

        <div class="grid-item project-tags">
          <p>2020</p>
          <p>•</p>
          <p>UX Design</p>
          <p>Mobile</p>
          <p>Strategy</p>
        </div>
        <div class="grid-item project-image">
          <img src={oImgXRM}></img>
        </div>
        <div class="grid-item project-description">
          <h4>Olitor — UW School of Nursing</h4>
          <p>A platform to help older adults adhere to a healthy diet.</p>
          <p>
            Ideation, design, interactive prototype, usability, design and
            development strategy
          </p>
          <button>case study</button>
        </div>

        <div class="grid-item project-tags">Three</div>
        <div class="grid-item project-image">Four</div>
        <div class="grid-item project-description">Five</div>

        <div class="grid-item project-tags">Three</div>
        <div class="grid-item project-image">Four</div>
        <div class="grid-item project-description">Five</div>

        {/* <div class="grid-item more">More +</div> */}

        <div class="grid-item cta">
          I especially enjoy working on problems that involve emerging tech,
          tools for productivity and creativity, or health and wellbeing.
          <br />
          Have a challenging problem to solve? Would like to give me a shot?
          <br />
          Reach out — sid11@uw.edu
        </div>
      </div>
    </Layout>
  )
}

export default TestPage
