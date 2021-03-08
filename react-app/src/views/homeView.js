import React, { useState } from "react";

export default function HomeView({ handleSubmit, token, text }) {
  let userType = "";
  if (token) {
    userType = "an Applicant";
    if (token.authLevel === 1) userType = "a Recruiter";
  }

  return (
    <div>
      WELCOME TO THE HOME VIEW!
      {token ? (
        <div>
          <p>Logged in user email: {token.email}</p>
          <p>You are {userType}</p>
          <div>
            <button onClick={(e) => handleSubmit(e, 0)}>
              I want to be an Applicant!
            </button>
            <button onClick={(e) => handleSubmit(e, 1)}>
              I want to be a Recruiter!
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
