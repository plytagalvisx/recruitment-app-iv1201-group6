import React from "react";

export default function ApplicationsView({ token }) {
  return (
    <div>
      {token.authLevel === 1 ? (
        <div>YOU ARE A RECRUITER, SHOWING APPLICATIONS</div>
      ) : (
        <div>YOU ARE AN APPLICANT, CREATE AN APPLICATION</div>
      )}
    </div>
  );
}
