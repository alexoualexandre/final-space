import { useParams } from "react-router-dom";
import "./../Css/Episode.css";
import { useEffect } from "react";
import { useState } from "react";

function Episode() {
  const [episode, setEpisode] = useState(null);
  const [images, setImage] = useState(null);

  useEffect(() => {
    if (episode === null) {
      fetch("https://finalspaceapi.com/api/v0/episode")
        .then((response) => response.json())
        .then((response) => {
          setEpisode(response);
        });
    }
  });
  useEffect(() => {
    if (images === null) {
      fetch("https://finalspaceapi.com/api/v0/character")
        .then((response) => response.json())
        .then((response) => {
          setImage(response);
        });
    }
  });

  const { id } = useParams();
  return (
    <>
      {episode && (
        <div className="flex" key={0}>
          <div className="chapter" key={id}>
            <img src={episode[id-1].img_url} className="img_chapter"/>
          </div>
        </div>
      )}
    </>
  );
}
export default Episode;
