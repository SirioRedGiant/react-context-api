import { NavLink } from "react-router-dom";

//note  importo: l'Hook per usare il context(useContext) e (BudgetContext) il context stesso
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Header() {
  //note invoco useContext(l'hook) per collegarmi alla "stazione radio" BudgetContext --> estraggo budgetMOde(per verificare se è on/off) e toggleBudgetMode --> la funzione per cambiare stato
  const { budgetMode, toggleBudgetMode } = useContext(BudgetContext);

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
          <li className="nav-item ms-auto d-flex align-items-center">
            <button
              className={`btn ${budgetMode ? "btn-success" : "btn-outline-primary"} btn-sm me-3 shadow-sm`}
              onClick={toggleBudgetMode}
            >
              {budgetMode ? "BUDGET ➡️ ON" : "BUDGET ⬅️ OFF"}
            </button>

            {/* SECRET FEATURE */}
            <span className="nav-link disabled text-muted">
              Sirio's Businesses & Secrets
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
