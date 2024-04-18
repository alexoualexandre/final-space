import { useParams } from "react-router-dom";
import "./../Css/Episode.css";

function Episode() {
  const { id } = useParams();
  return (
    <>
      <p>coucou{id} </p>
    </>
  );
}
export default Episode;
