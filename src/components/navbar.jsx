import { useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { ReactComponent as IconReceiptCutoff } from "bootstrap-icons/icons/receipt-cutoff.svg";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
export default function Navbar() {
  const [navLinks] = useState([
    {
      navigation: "/",
      name: "Home",
    },
    {
      navigation: "/invoices",
      name: "Invoices",
    },
    {
      navigation: "/settings",
      name: "Settings",
    },
  ]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <IconReceiptCutoff className="me-2" />
          Invoice Generator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active nav-link" : "inactive nav-link")}
                  to={item.navigation}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
