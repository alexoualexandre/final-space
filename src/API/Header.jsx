import "./../Css/Header.css";
import {useEpisodeFavoris} from '../Context/FavorieContext'


function Header() {
  const { numeroEpisodeEnFavvorisDansContexte } = useEpisodeFavoris()
  return (
    <>
      <header>
      <p style={{fontSize:"30px",color:"blue",position:"fixed",top:"0",right:0,zIndex:2}}>{numeroEpisodeEnFavvorisDansContexte}</p>
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/1867580/capsule_616x353.jpg?t=1678834698"
          alt="not-found"
          className="img-header"
        />
      </header>
    </>
  );
}
export default Header;
