import { Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import searching from "../redux/action";

const VerticalSideBar = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchField.value;
    dispatch(searching(inputValue));
  };

  return (
    <Col xs={2}>
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/">
            <img src="./assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="ps-0">
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <form className="input-group mt-3" onSubmit={handleSearch}>
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => dispatch(searching(e.target.value))}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <Link className="d-block" to="/">
            Cookie Policy
          </Link>{" "}
          |<Link to="/"> Privacy</Link>
        </div>
      </nav>
    </Col>
  );
};

export default VerticalSideBar;
