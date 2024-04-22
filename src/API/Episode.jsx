import { useParams } from "react-router-dom";
import "./../Css/Episode.css";
import CountFavoris from "./CountFavoris";



function Episode() {
  const { id,change } = useParams();
  return (
    <>
      <p>coucou{id}</p>
      <CountFavoris change={change} /> 
      
    </>
  );
}
export default Episode;
