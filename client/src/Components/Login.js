import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginAction } from "../Redux/auth/action";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const Section = styled.div`
  margin-top: 10%;
`;

const Login = ({ auth, loginAction }) => {
  const alert = useAlert();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    auth.error && alert.error(auth.error.message);
  }, [auth.error, alert]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    loginAction(email, password, history);
  };

  return (
    <Section>
      <Row>
        <Col xl={4}></Col>
        <Col xl={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xl={4}></Col>
      </Row>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
