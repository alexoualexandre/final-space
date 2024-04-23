import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  
  const [numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode] = useState(0);
  const [episode, setEpisode] = useState(0);

  return (
    <ThemeContext.Provider value={{ numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode, episode, setEpisode }}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes={
  children: PropTypes.array.isRequired,
}
export const useEpisodeFavoris = () => useContext(ThemeContext);
