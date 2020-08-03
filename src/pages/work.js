import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"

var oProjectData = {
  featured: [
    {
      name: "Olitor App – UW School of Nursing",
      description:
        "A platform to help older adults adhere to mediterranean diet.",
      tags: "ux design, mobile",
      link: "",
    },
    {
      name: "XR Multitasking Design Guide",
      description:
        "Helping designers and developers build multitasking systems in XR.",
      tags: "xr design, emerging tech",
      link: "",
    },
    {
      name: "Seattle Badminton Club Website",
      description: "A user centered website redesign project.",
      tags: "ux design, web",
      link: "",
    },
  ],
  more: [
    {
      name: "Mozilla Firefox Listen",
      description:
        "Usability study for Mozilla's upcoming app.",
      tags: "usability study",
      link: "",
    },
    {
      name: "Contentserv",
      description:
        "Design and development of highly functional web components.",
      tags: "web development, enterprise",
      link: "",
    },
    {
      name: "Cascade Bicycle Club",
      description: "Designing a new visual system for the organization.",
      tags: "visual design",
      link: "",
    },
    {
      name: "Tic Tac Toe",
      description: "A two player, touch based tic-tac-toe game that can be installed in public places.",
      tags: "physical prototype, arduino",
      link: "",
    },
    {
      name: "AR Health Kit",
      description: "Access to professional medical guidance in emergency situations.",
      tags: "xr concept",
      link: "",
    },
    {
      name: "Safety Net",
      description: "Empowering high school teachers to identify students who may be experiencing mental health issues.",
      tags: "ux research, ideation",
      link: "",
    },
  ],
}

var getProjectDOMs = aProjects =>
  aProjects.map(project => {
    return (
      <div className="projectItem br-s">
        <div className="containerLeft">
          {/* <Link to={project.link}><span className="projectName bold link">{project.name}</span></Link> */}
          <div className="projectName bold">
            {project.link ? (
              <Link to={project.link} className="link">
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
