import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./../Css/Chapter.css";
import { useEpisodeFavoris } from "../Context/FavorieContext";


function Saison({ episode }) {
  const limit = episode;
  const { numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode} = useEpisodeFavoris();
  return (
    <>
      <div className="flex" key={0}>
        
        {limit.slice(0, 10).map((obj) => {
          return (
            <>
            
              <div className="chapter" key={obj.id}>
                {obj.name}
                
                <Link to={`/episode/${obj.id}/${numeroEpisodeEnFavvorisDansContexte}`}>
                  <img src={obj.img_url} className="img_chapter" />
                </Link>
                <button
                  type="button"
                  className="button-favorie"
                  onClick={() => {setNumeroEpisode(obj.id);}}
                >
                  <img
                    className="image-favorie"
                    src="./../src/Images/OIG4.jfif"
                  />{" "}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
  
}
Saison.propTypes = {
  episode: PropTypes.array,
};
export default Saison;
