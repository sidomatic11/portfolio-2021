import React from "react"
import PropTypes from "prop-types"
import Menu from "./../components/menu"

// import "./layout.css"

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

const Layout = ({ children, isMenuAtBottom, sAddClass }) => {
  var sClassName = "layout "
  if (sAddClass) {
    sClassName = sClassName + sAddClass
  }

  return (
    <div className={sClassName}>
      <Menu />

      <main>{children}</main>

      {/* ===== FOOTER ===== */}
      <div className="footer">
        <br />

        <h3>Get in touch —</h3>

        <p>
          <a href="mailto:sid11@uw.edu" target="_blank" rel="noreferrer">
            <span className="link">Email</span>
          </a>
          {/* <p onClick={copyEmail}>Copy email to clipboard</p> */}
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/patilsiddhant/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link">LinkedIn</span>
          </a>
        </p>

        <p>
          <a
            href="https://twitter.com/sidomatic11"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link">Twitter</span>
          </a>
        </p>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuAtBottom: PropTypes.bool,
  sAddClass: PropTypes.string,
}

export default Layout
