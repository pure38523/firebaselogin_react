import React from "react";
import Signup from "./Signup";
import Homepage from './Homepage';
import Login from './Login';
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path = "/" exact component={Homepage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
