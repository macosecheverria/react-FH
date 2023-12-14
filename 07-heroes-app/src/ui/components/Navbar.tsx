import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

const Navbar = () => {
  const {name, logout} =  useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login',{
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Asociaciones
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={"/marvel"}
            >
              Marvel
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={"/dc"}
            >
              Dc
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={"/search"}
            >
              Search
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={"/hero"}
            >
              Hero
            </NavLink>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-left">

            <span className="nav-item nav-link text-primary">{name}</span>
            <button className="nav-item nav-link btn" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
