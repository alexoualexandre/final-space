import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./../Css/Chapter.css";
import { useEpisodeFavoris } from "../Context/FavorieContext";

function Saison({ episode }) {
  const limit = episode;
  const { numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode } =
    useEpisodeFavoris();

  const verify = (id) => {
    if (!numeroEpisodeEnFavvorisDansContexte.includes(id)) {
      const newT = [...numeroEpisodeEnFavvorisDansContexte, id]; // Créez un nouveau tableau en ajoutant la nouvelle id
      setNumeroEpisode(newT); // Met à jour l'état avec le nouveau tableau
    }
  };

  return (
    <>
      <div className="flex" key={0}>
        {limit.slice(0, 10).map((obj) => {
          return (
            <>
              <div className="chapter" key={obj.id}>
                {obj.name}

                <Link to={`/episode/${obj.id}`}>
                  <img src={obj.img_url} className="img_chapter" />
                </Link>
                <button
                  type="button"
                  className="button-favorie"
                  // la fonction verify verifie si le tableau contient deja l'id et setNumeroEpisode met a jour le state
                  // contenue dans FavorieContext
                  onClick={() => {
                    verify(obj.id);
                  }}
                  // //////////////////////////////////////
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
