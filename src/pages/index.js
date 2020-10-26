import React, { useEffect, useState } from "react"
// import logo from "./../images/logo.svg"
// import Menu from "./../components/menu"
import Layout from "../components/layout"
import Button from "../components/button"
import { Link } from "gatsby"

import oImgXRM from "../images/tile-xrm.gif"
import oImgOlitor from "../images/tile-olitor.gif"
import oImgSBC from "../images/sbc.gif"
import oImgContentserv from "../images/tile-contentserv.gif"
import oImgCascade from "../images/gif_cascade.gif"
import oImgTicTacToe from "../images/gif_ttt.gif"
import oImgMozilla from "../images/gif_mozilla.gif"
import oImgSafetyNet from "../images/gif_safetynet.gif"
import oImgIconNewTab from "../images/icons/open-in-new.svg"
import oImgSendIcon from "./../images/icons/send.svg"
import oImgCopyIcon from "./../images/icons/content-copy.svg"

var oProjectData = {
  featured: [
    {
      id: "id_xrm",
      name: "XR Multitasking Design Guide",
      description:
        "Helping designers and developers build multitasking systems in XR.",
      role:
        "Formative Research, Sprint Planning and Facilitation, Ideation and Storyboarding, Video Prototyping, Usability Studies",
      tags: ["2020", "•", "xr design", "emerging tech"],
      link:
        "https://www.notion.so/XR-Multitasking-Design-Guide-7d7b5e393bd34aa6a81090839dd869c0",
      image: oImgXRM,
    },
    {
      id: "id_olitor",
      name: "Olitor App – UW School of Nursing",
      description:
        "Building a platform to help older adults adhere to the mediterranean diet.",
      role:
        "Secondary Research, Ideation, Design, Prototyping, Usability, Design and Development Strategy",
      tags: ["2020", "•", "ux design", "mobile", "strategy"],
      link:
        "https://www.notion.so/Olitor-App-UW-School-of-Nursing-094630a0cc714395905ad675631a6c4f",
      image: oImgOlitor,
    },
    // {
    //   id: "id_sbc",
    //   name: "Seattle Badminton Club Website",
    //   description:
    //     "Redesigning the website for a more welcoming and efficient experience.",
    //   role: "role",
    //   tags: ["2019", "•", "ux design", "web"],
    //   link: "",
    //   image: oImgSBC,
    // },
    {
      id: "id_contentserv",
      name: "Contentserv",
      description:
        "Design and development of highly functional web components. Leading teams and mentoring new employees.",
      role:
        "Ideation, Wireframes, Hi-fi mockups, System Architecture, Front End Development (React.js) ",
      tags: ["2018", "•", "web dev", "enterprise"],
      link:
        "https://www.notion.so/Contentserv-Software-Development-171b41fa91b645c3b1dcfaf48dfffc18",
      image: oImgContentserv,
      label: "learn more",
    },
  ],
  more: [
    {
      id: "id_contentserv",
      name: "Contentserv",
      description:
        "Design and development of highly functional web components.",
      tags: "web development, enterprise",
      link:
        "https://www.notion.so/Contentserv-Software-Development-171b41fa91b645c3b1dcfaf48dfffc18",
      image: oImgContentserv,
    },
    {
      id: "id_ttt",
      name: "Tic Tac Toe",
      description:
        "A two player, touch based tic-tac-toe game that can be installed in public places.",
      tags: "physical prototype, arduino",
      link:
        "https://www.notion.so/Tic-Tac-Toe-Physical-Prototype-6cb820a20adb45b4879acbc5db20fe6f",
      image: oImgTicTacToe,
    },
    {
      id: "id_mozilla",
      name: "Mozilla Firefox Listen",
      description: "Usability study for Mozilla's upcoming app.",
      tags: "usability study",
      link: "",
      image: oImgMozilla,
    },
    {
      id: "id_cascade",
      name: "Cascade Bicycle Club",
      description: "Designing a new visual system for the organization.",
      tags: "visual design",
      link: "",
      image: oImgCascade,
    },
    // {
    //   id: "id_arhealth",
    //   name: "AR Health Kit",
    //   description:
    //     "Access to professional medical guidance in emergency situations.",
    //   tags: "xr concept",
    //   link: "",
    // },
    {
      id: "id_safety",
      name: "Safety Net",
      description:
        "Empowering high school teachers to identify students who may be experiencing mental health issues.",
      tags: "ux research, ideation",
      link: "",
      image: oImgSafetyNet,
    },
  ],
}

var copyEmail = () => {
  // Create new element
  var el = document.createElement("textarea")
  // Set value (string to be copied)
  el.value = "sid11@uw.edu"
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "")
  el.style = { position: "absolute", left: "-9999px" }
  document.body.appendChild(el)
  // Select text inside element
  el.select()
  // Copy text to clipboard
  document.execCommand("copy")
  // Remove temporary element
  document.body.removeChild(el)
  alert("Copied the text: sid11@uw.edu")
}

var getProjectDOMs = aProjects =>
  aProjects.map(project => {
    return (
      <>
        <div class="grid-item project-tags">
          {project.tags.map(tag => {
            return <h4 className="project-tag">{tag}</h4>
          })}
        </div>
        <div class="grid-item project-image">
          <img src={project.image}></img>
        </div>
        <div class="grid-item project-details">
          <h2 className="project-name">{project.name}</h2>
          <h5 className="project-description">{project.description}</h5>
          <h5 className="project-role font-thin">{project.role}</h5>
          {project.link ? (
            <Button
              sLabel={project.label ? project.label : "Case Study"}
              sLink={project.link}
              bIsLight={true}
              oIcon={oImgIconNewTab}
            />
          ) : null}
        </div>
      </>
    )
  })

const IndexPage = () => {
  var aFeaturedProjects = getProjectDOMs(oProjectData.featured)

  return (
    <Layout sAddClass="homePage">
      <div class="wrapper">
        <div class="grid-item intro">
          <div className="banner level-one">
            <h1>Hello There! </h1>
            <h1 className="white">I’m Siddhant.</h1>
          </div>

          <div className="banner level-two">
            <h1>
              <span className="white">User Experience Designer</span> would be
              one way of describing me,
            </h1>
          </div>

          <div className="banner level-three">
            <h1>
              but I’d prefer —{" "}<br/>
              <span className="white">Creative Problem Solver</span> :)
            </h1>
          </div>
        </div>

        <h3 class="grid-item featured">Featured Work</h3>

        {aFeaturedProjects}

        {/* <div class="grid-item more">More +</div> */}

        <div class="grid-item cta">
          <div className="banner level-two">
            <h1>
              I especially enjoy working on problems that involve&nbsp;
              <span className="white">emerging tech</span>,&nbsp;
              <span className="white">complex systems</span>, or&nbsp;
              <span className="white">novel interactions</span>.
            </h1>
          </div>

          <div className="banner level-one">
            <h1>
              <span className="white">
                Have a challenging problem to solve?
              </span>
              &nbsp; Would like to give me a shot?
            </h1>
            <br />
            <br />
            <div className="reach-out">
            <h1 className="white">Reach out —</h1>
            <Button
              sLabel="Send Email"
              oIcon={oImgSendIcon}
              sLink="mailto:sid11@uw.edu"
            />
            <Button
              sLabel="Copy Email"
              oIcon={oImgCopyIcon}
              fOnClick={copyEmail}
            />
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
