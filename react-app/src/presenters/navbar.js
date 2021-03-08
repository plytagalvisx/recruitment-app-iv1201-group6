import React from "react";
import NavbarView from "../views/navbarView";

export default function Navbar({ token }) {
  return React.createElement(NavbarView, {
    loggedIn: token ? true : false,
    userType: token ? token.authLevel : false
  });
}
