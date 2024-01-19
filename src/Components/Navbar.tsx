import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { NameContext } from "./GlobalNameContext";

const Navbar = () => {
  const name = useSelector((state: any) => state.name);
  const { firstName, setFirstName } = useContext(NameContext);

  return (
    <div className="navbar">
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      {firstName && <div className="welcome">Welcome, {firstName}!</div>}
    </div>
  );
};

export default Navbar;
