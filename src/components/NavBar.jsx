import React from 'react'

const NavBar = ({totalQuantity}) => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg" id="Nav-design">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mobile Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products">
                  All Products
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <span style={{ marginRight: "0.6em" }}>
                <i className="bi bi-cart4"></i>
                </span>
                <span style={{ marginRight: "0.3em" }}>Cart</span>
                <span
                  className="badge bg-dark text-white ms-1 rounded-pill"
                  id="count"
                >
                  {totalQuantity}
                </span>
              </button>
            </form>
            <button className="btn btn-success">Proceed to pay</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
