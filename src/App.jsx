import Header from "./API/Header.jsx";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/FavorieContext.jsx";
import { useEffect } from "react";
import { useState } from "react";

function App() {
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
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
