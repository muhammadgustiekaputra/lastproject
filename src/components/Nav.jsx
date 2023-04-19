import { Link } from "react-router-dom";
// import axios from "axios";
// import LoginPage from "../pages/LoginPage";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark --bs-secondary-bg-info fixed-top">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="index.html">
            <img
              src=""
              style={{ height: 150, width: 75 }}
            />
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/login" className="nav-link ">
                Login
              </Link>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="register/register.html"
                  aria-label="alert-success"
                >
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
