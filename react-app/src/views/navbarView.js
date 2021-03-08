import { Link } from "react-router-dom";
export default function NavbarView({ loggedIn, userType }) {
  let application = "Create Applications";
  if (userType === 1) application = "Show Applications";

  if (loggedIn) {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Recruitment App
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/applications" className="nav-link">
                {application}
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="nav-link" name="logoutBtn">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Recruitment App
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
