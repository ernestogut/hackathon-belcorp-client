import { Link } from "react-router-dom"
import BelcorpLogo from "../components/BelcorpLogo"
import { Outlet } from "react-router-dom"
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <BelcorpLogo />
        <nav>
          <ul>
            <li className="navigation-item">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              <Link to={`clients`}>Clients</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <div className="content-title">
          <h1>Bienvenida, Consultora</h1>
        </div>
        <div id="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}
