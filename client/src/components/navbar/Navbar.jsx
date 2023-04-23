import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return null;
  {/*     <div className="navbar">
      <div className="navContainer">
        {user ? user.username : (
          <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
        )}
      </div>
        </div> */}
};

export default Navbar;
