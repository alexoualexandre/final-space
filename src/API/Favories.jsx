import { useEpisodeFavoris } from "../Context/FavorieContext";

function Favories() {
  const { numeroEpisodeEnFavvorisDansContexte } = useEpisodeFavoris();
  console.log(numeroEpisodeEnFavvorisDansContexte);
  return (
    <div className="flex" key={0}>
      <div className="chapter"></div>
    </div>
  );
}
export default Favories;
