import { useState } from "react";
import { useEffect } from "react";
import Saison from "./Saison_image";

function Article() {
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

  return (
    <>
      {episode && (
        <>
          <Saison episode={episode} />
        </>
      )}
    </>
  );
}
export default Article;
