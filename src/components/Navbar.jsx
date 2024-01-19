import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../logo/Spotify_Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search, setQueryParam } from "../redux/actions";

const Topbar = () => {
  const location = useLocation();
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();
  const callsearch = () => {
    dispatch(setQueryParam(Input));
    dispatch(search(Input));
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbar-white bg-navbar fixed-left justify-content-between"
      id="sidebar"
    >
      <Container className="mt-3">
        <Row>
          <Col xs={12}>
            <Link to={"/"}>
              <Navbar.Brand>
                <img src={logo} alt="logo" width="131px" height="40px" />
              </Navbar.Brand>
            </Link>
          </Col>

          <Col xs={12}>
            <Nav className="me-auto">
              <Row className="ps-3 mt-5">
                <Col xs={12}>
                  <NavLink to={"/"} style={{ textDecoration: "none", color: "gray" }}>
                    <i class="fas fa-home fa-lg"></i>&nbsp; Home
                  </NavLink>
                </Col>
                <Col xs={12} className="mt-3">
                  <NavLink to={"/favourites.html"} style={{ textDecoration: "none", color: "gray" }}>
                    <i class="fas fa-book-open fa-lg"></i>&nbsp; PlayList
                  </NavLink>
                </Col>
                {location.pathname === "/" && (
                  <Col xs={12}>
                    <div class="input-group mt-3">
                      <input
                        type="text"
                        value={Input}
                        class="form-control mb-2"
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <div class="input-group-append" style={{ marginBottom: "4%" }}>
                        <Button variant="outline-secondary" type="button" id="button-addon1" onClick={callsearch}>
                          GO
                        </Button>
                      </div>
                    </div>
                  </Col>
                )}
              </Row>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-column justify-content-center pb-3 " style={{ alignItems: "center" }}>
        <Link>
          <Button className="signup-btn ">Sign Up</Button>
        </Link>
        <Link>
          <Button className="login-btn ">Login</Button>
        </Link>
        <div>
          <span style={{ color: "gray" }}>
            <Link style={{ color: "gray", textDecoration: "none" }}>Cookie Policy</Link> |{" "}
            <Link style={{ color: "gray", textDecoration: "none" }}>Privacy</Link>
          </span>
        </div>
      </div>
    </Navbar>
  );
};
export default Topbar;
