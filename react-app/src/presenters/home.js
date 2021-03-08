import React from "react";
import HomeView from "../views/homeView.js";

export default function Home({ token, setToken }) {
  const [text, setText] = React.useState(null);

  async function handleSubmit(e, authLevel) {
    e.preventDefault();
    const res = await fetch("/api/setAuthorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: token.email,
        authLevel: authLevel,
      }),
    }).then((data) => data.json());
    setText(res.message);
    setToken(res.token);
  }
  return React.createElement(HomeView, {
    handleSubmit,
    text,
    token,
  });
}
