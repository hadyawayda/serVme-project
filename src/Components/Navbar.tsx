import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="welcome">Welcome, Hady!</div>
    </div>
  );
};

export default Navbar;
