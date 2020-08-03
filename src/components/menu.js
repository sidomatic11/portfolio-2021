import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="mainMenu">

      <div className="image is-48x48">
        <Link to="/">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logo">
              <path
                id="what"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM24.0571 40.0571C32.8937 40.0571 40.0571 32.8937 40.0571 24.0571C40.0571 15.2206 32.8937 8.05714 24.0571 8.05714C15.2206 8.05714 8.05714 15.2206 8.05714 24.0571C8.05714 32.8937 15.2206 40.0571 24.0571 40.0571Z"
                fill="#BDBDBD"
              />
              <path
                id="how"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0571 40.0571C32.8937 40.0571 40.0571 32.8937 40.0571 24.0571C40.0571 15.2206 32.8937 8.05713 24.0571 8.05713C15.2206 8.05713 8.05713 15.2206 8.05713 24.0571C8.05713 32.8937 15.2206 40.0571 24.0571 40.0571ZM23.9428 31.9428C28.3611 31.9428 31.9428 28.3611 31.9428 23.9428C31.9428 19.5246 28.3611 15.9428 23.9428 15.9428C19.5246 15.9428 15.9428 19.5246 15.9428 23.9428C15.9428 28.3611 19.5246 31.9428 23.9428 31.9428Z"
                fill="#D8D8D8"
              />
              <circle id="why" cx="23.9429" cy="23.9429" r="8" fill="#F2F2F2" />
            </g>
          </svg>
        </Link>
      </div>

      <div className=" menuLabel">
        {/* <a href="https://www.notion.so/Portfolio-Siddhant-Patil-86ba31ee936e496b91234dd099667b85">
          work
        </a> */}
        <h4><Link to="/work/" id="id-work">work</Link></h4>
      </div>

      <div className=" menuLabel">
        <h4><Link to="/about/" id="id-about">about</Link></h4>
      </div>

    </div>
  )
}

export default Menu
