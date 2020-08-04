import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logoutAction } from "../Redux/auth/action";
import { useHistory, Link } from "react-router-dom";

const NavigationBar = ({ auth, logoutAction }) => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutAction(history);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/" className="navbrand">
        My Todo Monitor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {auth.isAuthenticated ? (
            <>
              <Nav.Link>
                <button className="myButton">
                  <Link className="navlink" to="/todo">
                    My TodoLists
                  </Link>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button className="myButton" onClick={handleLogout}>
                  Logout
                </button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <button className="myButton">
                  <Link className="navlink" to="/login">
                    Login
                  </Link>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button className="myButton">
                  <Link className="navlink" to="/signup">
                    Signup
                  </Link>
                </button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchtoProps = {
  logoutAction,
};
export default connect(mapStateToProps, mapDispatchtoProps)(NavigationBar);
