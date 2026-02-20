import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-light shadow-sm mb-4">
      <div className="container">
        <ul className="nav nav-pills py-3">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item ms-auto">
            <span className="nav-link disabled text-muted">
              Sirio's Businesses & Secrets
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
