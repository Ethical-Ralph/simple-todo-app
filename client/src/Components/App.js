import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Dashborad from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./ProtectedRoute";
import Todo from "./Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/todo" component={Dashborad} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/todo/:todoId" component={Todo} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
