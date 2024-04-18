import Header from "./API/Header.jsx";
import { Outlet } from "react-router-dom";
import CountFavoris from "./API/CountFavoris.jsx";

function App() {
  return (
    <>
      <Header />
      <CountFavoris />
      <Outlet />
    </>
  );
}

export default App;
