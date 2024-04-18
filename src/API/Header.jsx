import "./../Css/Header.css";
import CountFavoris from "./CountFavoris";

function Header() {
  return (
    <>
      <header>
        <img
          src="./../src/Images/image-header.jpg"
          alt="not-found"
          className="img-header"
        />
        <CountFavoris />
      </header>
    </>
  );
}
export default Header;
