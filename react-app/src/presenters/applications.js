import React from "react";
import ApplicationsView from "../views/applicationsView";
import ShowApplicationsView from "../views/showApplicationsView";
import CreateApplicationsView from "../views/createApplicationsView";

export default function Applications({ token }) {
  if (token.authLevel === 1) {
    return React.createElement(ShowApplicationsView, {
      token,
    });
  } else {
    return React.createElement(CreateApplicationsView, {
      token,
    });
  }
}
