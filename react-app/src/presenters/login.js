import React from "react";
import LoginView from "../views/loginView";
import { useHistory } from "react-router-dom";

export default function Login({ setToken }) {
  const [text, setText] = React.useState(null);

  const history = useHistory();

  async function handleSubmit(e, email, password) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((data) => data.json());

    setText(res.message);
    if (res.token) {
      setToken(res.token);
      history.push("/");
    }
  }

  return React.createElement(LoginView, {
    handleSubmit,
    text,
  });
}
