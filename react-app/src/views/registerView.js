import React from "react";

export default function RegisterView({ handleSubmit, text }) {
  const [firstname, setFirstName] = React.useState(null);
  const [lastname, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <div>
      <form>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e, firstname, lastname, email, password)}
        >
          Submit
        </button>
        <p>{text}</p>
      </form>
    </div>
  );
}
