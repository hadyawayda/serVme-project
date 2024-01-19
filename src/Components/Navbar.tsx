import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Uncomment next two lines to use Context API
// import { useContext } from "react";
// import { NameContext } from "./GlobalNameContext";

const Navbar = () => {
  const name = useSelector((state: any) => state.name); // using Redux
  // Uncomment next line to use Context API
  // const { firstName } = useContext(NameContext);

  return (
    <div className="navbar">
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      {name && <div className="welcome">Welcome {name}</div>}
      {/** Uncomment next line to use Context API */}
      {/* {firstName && <div className="welcome">Welcome {firstName}</div>} */}{" "}
    </div>
  );
};

export default Navbar;
