import React from "react"
import PropTypes from "prop-types"
import Menu from "./../components/menu"

import Button from "./../components/button"

import oImgSendIcon from "./../images/icons/send.svg"
import oImgCopyIcon from "./../images/icons/content-copy.svg"
import oImgLinkedInIcon from "./../images/icons/linkedin.svg"
import oImgTwitterIcon from "./../images/icons/twitter.svg"

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

      <div className="footer">

        <h3 className="get-in-touch">Get in touch</h3>

        <div className="connect-buttons-wrapper">

          <Button sLabel="Send Email" oIcon={oImgSendIcon} sLink="mailto:sid11@uw.edu"/>
          <Button sLabel="Copy Email" oIcon={oImgCopyIcon} fOnClick={copyEmail}/>
          <Button sLabel="LinkedIn" oIcon={oImgLinkedInIcon} sLink="https://www.linkedin.com/in/patilsiddhant/"/>
          <Button sLabel="Twitter" oIcon={oImgLinkedInIcon} sLink="https://twitter.com/sidomatic11"/>

        </div>

        <p className="copyright">© Copyright {new Date().getFullYear()} — designed and developed by Siddhant Patil</p>
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
