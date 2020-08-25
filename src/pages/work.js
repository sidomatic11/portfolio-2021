import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import oTempImage from "../images/giphy.gif"
import oImgXRM from "../images/xrchitects.gif"
import oImgOlitor from "../images/olitor.gif"
import oImgSBC from "../images/sbc.gif"
import oImgContentserv from "../images/gif_contentserv.gif"
import oImgCascade from "../images/gif_cascade.gif"
import oImgTicTacToe from "../images/gif_ttt.gif"
import oImgMozilla from "../images/gif_mozilla.gif"
import oImgSafetyNet from "../images/gif_safetynet.gif"
import ReactTooltip from "react-tooltip"

var oProjectData = {
  featured: [
    {
      id: "id_olitor",
      name: "Olitor App – UW School of Nursing",
      description:
        "Building a platform to help older adults adhere to the mediterranean diet.",
      tags: "ux design, mobile",
      link: "",
      image: oImgOlitor,
    },
    {
      id: "id_xrm",
      name: "XR Multitasking Design Guide",
      description:
        "Helping designers and developers build multitasking systems in XR.",
      tags: "xr design, emerging tech",
      link: "",
      image: oImgXRM,
    },
    {
      id: "id_sbc",
      name: "Seattle Badminton Club Website",
      description: "Redesigning the website for a more welcoming and efficient experience.",
      tags: "ux design, web",
      link: "",
      image: oImgSBC,
    },
  ],
  more: [
    {
      id: "id_contentserv",
      name: "Contentserv",
      description:
        "Design and development of highly functional web components.",
      tags: "web development, enterprise",
      link: "",
      image: oImgContentserv
    },
    {
      id: "id_mozilla",
      name: "Mozilla Firefox Listen",
      description: "Usability study for Mozilla's upcoming app.",
      tags: "usability study",
      link: "",
      image: oImgMozilla
    },
    {
      id: "id_cascade",
      name: "Cascade Bicycle Club",
      description: "Designing a new visual system for the organization.",
      tags: "visual design",
      link: "",
      image: oImgCascade
    },
    {
      id: "id_ttt",
      name: "Tic Tac Toe",
      description:
        "A two player, touch based tic-tac-toe game that can be installed in public places.",
      tags: "physical prototype, arduino",
      link: "",
      image: oImgTicTacToe
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
      image: oImgSafetyNet
    },
  ],
}

var getProjectDOMs = aProjects =>
  aProjects.map(project => {
    var sProjectNameClasses = "projectName bold ";
    if (project.image) {
      sProjectNameClasses += "tooltip ";
    }
    if (project.link) {
      sProjectNameClasses += "link ";
    }

    return (
      <div className="projectItem br-s" key={project.id}>
        <div className="containerLeft">
          {/* <Link to={project.link}><span className="projectName bold link">{project.name}</span></Link> */}
          <div className={sProjectNameClasses} data-tip data-for={project.id}>
            {project.link ? (
              <Link to={"/work" + project.link}>
                {project.name}
              </Link>
            ) : (
              project.name
            )}
          </div>
          <div className="projectDescription caption">
            {project.description}
          </div>
        </div>
        <div className="containerRight">{project.tags}</div>
        {project.image ? (
          <ReactTooltip id={project.id} effect="solid" className="projectImageTooltip">
            <img src={project.image} className="projectImage"></img>
          </ReactTooltip>
        ) : null}
      </div>
    )
  })

const Portfolio = () => {
  var aFeaturedProjects = getProjectDOMs(oProjectData.featured)
  var aMoreProjects = getProjectDOMs(oProjectData.more)

  return (
    <Layout sAddClass="workPage">
      <p className="wip br-m">
        <b>🚧 WIP — Actively working on adding the following case studies.</b>
      </p>

      <h3 className="br-s">Featured —</h3>
      {aFeaturedProjects}

      <div className="space-s" />

      <h3 className="br-s">More —</h3>
      {aMoreProjects}

      <div className="space-m" />
    </Layout>
  )
}

export default Portfolio
