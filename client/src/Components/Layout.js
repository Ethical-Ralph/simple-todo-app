import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative">
        <div className="main-bg">
          <Container>
            <NavigationBar />
            {children}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Layout;
