import React from "react";

export default function ShowApplicationsView() {
  const [response, setResponse] = React.useState(null);
  const [responseToPost, setResponseToPost] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const getUserApplications = async () => {
    const response = await fetch("/api/showUserApplications");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  return (
    <div>
      <button
        onClick={() =>
          getUserApplications()
            .then((res) => setResponse(res.express))
            .catch((err) => console.log(err))
        }
      >
        GET REQUEST
      </button>
      <p>{response}</p>
      <form onSubmit={handleUserRegistration}>
        <div>
          <label>Firstname</label>
          <input type="text" id="firstname" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" id="lastname" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{responseToPost}</p>
    </div>
  );
}
