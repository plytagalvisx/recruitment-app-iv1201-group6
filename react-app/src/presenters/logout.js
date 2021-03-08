import React from "react";
import LogoutView from "../views/logoutView";
import { useHistory } from "react-router-dom";

export default function Logout({ unsetToken, token }) {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    unsetToken(token);
    history.push("/");
  }

  return React.createElement(LogoutView, {
    handleSubmit,
  });
}
