import { Link } from "react-router-dom";

function Nav() {
  const style = {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Poppins",
  };

  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={style} to="/products">
          <li>Products</li>
        </Link>
        <Link style={style} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;