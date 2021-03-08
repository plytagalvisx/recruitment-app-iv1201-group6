import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useToken from "./useToken";
import Navbar from "./presenters/navbar";
import Home from "./presenters/home";
import Logout from "./presenters/logout";
import Register from "./presenters/register";
import Login from "./presenters/login";
import Applications from "./presenters/applications";

function App() {
  const { token, setToken, unsetToken } = useToken();

  return (
    <Router>
      <div className="container">
        <Navbar token={token} />
        <Route path="/" exact component={() => <Home setToken={setToken} token={token} />} />
        {token ? (
          <React.Fragment>
            <Route path="/logout" exact component={() => <Logout unsetToken={unsetToken} token={token} />} />
            <Route path="/applications" exact component={() => <Applications token={token} />} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/login" exact component={() => <Login setToken={setToken} token={token} />} />
            <Route path="/register" exact component={() => <Register setToken={setToken} token={token} />} />
          </React.Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
