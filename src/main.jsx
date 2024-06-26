import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Css/Index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Episode from "./API/Episode.jsx";
import Article from "./API/Article.jsx";
import Favories from "./API/Favories.jsx";

const router = createBrowserRouter([
  {
    element: (
      <>
        <App />
      </>
    ),

    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <Article />
          </>
        ),
      },
      {
        path: "/episode/:id/",
        element: (
          <>
            {" "}
            <Episode />
          </>
        ),
      },
      {
        path: "/Favories",
        element: (
          <>
            {" "}
            <Favories />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>,
);
