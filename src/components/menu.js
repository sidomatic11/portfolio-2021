import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="mainMenu">
      <div className="image is-48x48">
        <Link to="/">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logo">
              <g id="logo_grayscale_280">
                <path
                  d="M0 21C0 9.40202 9.40202 0 21 0V0C32.598 0 42 9.40202 42 21V21C42 32.598 32.598 42 21 42V42C9.40202 42 0 32.598 0 21V21Z"
                  fill="white"
                />
                <path
                  id="what"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM21.05 35.05C28.782 35.05 35.05 28.782 35.05 21.05C35.05 13.318 28.782 7.05 21.05 7.05C13.318 7.05 7.05 13.318 7.05 21.05C7.05 28.782 13.318 35.05 21.05 35.05Z"
                  fill="#B4B4B4"
                />
                <path
                  id="how"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.05 35.05C28.782 35.05 35.05 28.782 35.05 21.05C35.05 13.318 28.782 7.05 21.05 7.05C13.3181 7.05 7.05005 13.318 7.05005 21.05C7.05005 28.782 13.3181 35.05 21.05 35.05ZM20.95 27.95C24.816 27.95 27.95 24.816 27.95 20.95C27.95 17.084 24.816 13.95 20.95 13.95C17.0841 13.95 13.9501 17.084 13.9501 20.95C13.9501 24.816 17.0841 27.95 20.95 27.95Z"
                  fill="#D5D5D5"
                />
                <circle id="why" cx="20.9499" cy="20.95" r="7" fill="#F2F2F2" />
              </g>
            </g>
          </svg>
        </Link>
      </div>

      <div className="menuRight">
        <div className=" menuLabel">
          <a href="http://bit.ly/2WQvnP6" target="_blank" rel="noreferrer">
            <h3>resume</h3>
          </a>
        </div>

        <div className=" menuLabel">
          <h3>
            <Link to="/about/" id="id-about">
              about
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Menu
