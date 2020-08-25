import React, { useEffect, useState } from "react"
import "../styles/global.scss"
// import logo from "./../images/logo.svg"
// import Menu from "./../components/menu"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ReactTooltip from "react-tooltip"

require("typeface-open-sans")
require("typeface-quattrocento")

const IndexPage = () => {

  // const isMounted = true;
  const [isMounted, mountComplete] = useState(false);

  useEffect(function(){
    mountComplete(true);
    // ReactTooltip.rebuild();
  },[]);

  return (
    <Layout isMenuAtBottom={true} sAddClass="homePage">

      <div className="headline">
        Siddhant is a{" "}
        <b
          className="dark crossDisciplinary"
          data-tip
          data-for="crossDisciplinaryDesigner"
        >
          cross-disciplinary designer
        </b>
        . He cares deeply about making things as{" "}
        <i className="dark">efficient</i> as possible.
      </div>

      {isMounted ? <ReactTooltip id="crossDisciplinaryDesigner" effect="solid">
        <div className="crossDisciplinaryTooltip">
          <p>
            A UX <b>designer</b> who also wears the hats of an{" "}
            <b>engineer</b>, a <b>researcher</b> and an <b>artist</b> depending
            on what the situation calls for.{" "}
          </p>
          <p>
            He works best in <i>dynamic</i> environments.
          </p>
        </div>
      </ReactTooltip> : null}

      <div className="space-s" />

      <div>
        <span className="link">
          <Link to="/work/">see his work →</Link>
        </span>
      </div>

      <div className="space-l" />
      
    </Layout>
  )
}

export default IndexPage
