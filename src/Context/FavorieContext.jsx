import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode] = useState([]);

  // console.log(numeroEpisodeEnFavvorisDansContexte)

  return (
    <ThemeContext.Provider
      value={{ numeroEpisodeEnFavvorisDansContexte, setNumeroEpisode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export const useEpisodeFavoris = () => useContext(ThemeContext);
