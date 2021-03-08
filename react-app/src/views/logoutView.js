import React from "react";

export default function LoginView({ handleSubmit }) {
  return (
    <form>
      <input
        type="submit"
        value="Logout"
        name="Logout"
        onClick={(e) => handleSubmit(e)}
      ></input>
    </form>
  );
}
