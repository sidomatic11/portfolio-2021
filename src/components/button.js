import React from "react"

var getButtonDOM = (sLabel, oIcon, fOnClick, bIsLight) => {
    var sClass = "button-small "
    if (bIsLight) {
        sClass += "light";
    }
    
  return (
    <div className={sClass} onClick={fOnClick ? fOnClick : null}>
      <div className="icon">
        <img src={oIcon}/>
      </div>
      <div className="label button-s">{sLabel}</div>
    </div>
  )
}

const Button = ({ sLabel, sLink, oIcon, fOnClick, bIsLight }) => {
    var oButtonDOM = getButtonDOM(sLabel, oIcon, fOnClick, bIsLight);

    if (sLink) {
        return (
            <a href={sLink} target="_blank" rel="noreferrer">
                {oButtonDOM}
            </a>
        );
    } else {
        return (
            oButtonDOM
        );
    }
}

export default Button
