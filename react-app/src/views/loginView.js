import React from "react";

export default function LoginView({ handleSubmit, text }) {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <form>
      <div>
        <label>Email </label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <input
        type="submit"
        name="Login"
        onClick={(e) => handleSubmit(e, email, password)}
      ></input>
      <p>{text}</p>
    </form>
  );
}
