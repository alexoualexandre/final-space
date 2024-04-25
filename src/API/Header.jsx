import "./../Css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/1867580/capsule_616x353.jpg?t=1678834698"
          alt="not-found"
          className="img-header"
        />
        <Link to="/Favories">
          <button
            type="button"
            style={{ position: "fixed", top: 0, right: 0, zIndex: 1 }}
          >
            favories
          </button>
        </Link>
      </header>
    </>
  );
}
export default Header;
