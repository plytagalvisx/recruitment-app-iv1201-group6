import React from "react";
import RegisterView from "../views/registerView";
import { useHistory } from "react-router-dom";

export default function Register({ setToken }) {
  const [text, setText] = React.useState(null);

  const history = useHistory();

  async function handleSubmit(e, firstname, lastname, email, password) {
    e.preventDefault();
    const res = await fetch("/api/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
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

  return React.createElement(RegisterView, {
    handleSubmit,
    text,
  });
}
