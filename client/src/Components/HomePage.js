import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const Text = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  color: #000;
`;

const HomePage = ({ auth }) => {
  return (
    <Center>
      <Jumbotron>
        <Container>
          <Text>Get Organized Today</Text>
          <p>
            A simple todo application to organize your work and get more
            productive.
          </p>
          <p>
            {auth.isAuthenticated ? (
              <Button variant="primary">
                <Link className="navlink" to="/todo">
                  My TodoLists
                </Link>
              </Button>
            ) : (
              <Button variant="primary">
                <Link className="navlink" to="/signup">
                  Get Started
                </Link>
              </Button>
            )}
          </p>
        </Container>
      </Jumbotron>
    </Center>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(HomePage);
