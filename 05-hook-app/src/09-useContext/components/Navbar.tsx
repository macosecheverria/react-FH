import { NavLink } from "react-router-dom";

const Navbar = () => {  
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          useContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to={"/"}
              >
                home
              </NavLink>
            </li>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/login"}
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/about"}
            >
              About
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
