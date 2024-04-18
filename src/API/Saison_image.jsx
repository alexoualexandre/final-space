import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./../Css/Chapter.css";
import CountFavoris from "./CountFavoris";
import { useState } from "react";

function Saison({ episode }) {
  const limit = episode;
  const [change, setChange] = useState(0);

  return (
    <>
      <div className="flex" key={0}>
      <CountFavoris change={change} />
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
                  onClick={() => setChange(obj.id)}
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
  episode: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  }),
};
export default Saison;
