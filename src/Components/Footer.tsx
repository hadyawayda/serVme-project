import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div>serVme</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="lower-footer">
        <div>2024</div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
