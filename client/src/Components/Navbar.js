import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logoutAction } from "../Redux/auth/action";
import { useHistory } from "react-router-dom";

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
              <Nav.Link className="navlink" href="/todo">
                <button className="myButton">My TodoLists</button>
              </Nav.Link>
              <Nav.Link>
                <button className="myButton" onClick={handleLogout}>
                  Logout
                </button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link className="navlink" href="/login">
                <button className="myButton">Login</button>
              </Nav.Link>
              <Nav.Link className="navlink" href="/signup">
                <button className="myButton">Signup</button>
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
