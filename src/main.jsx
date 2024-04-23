import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Css/Index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Episode from "./API/Episode.jsx";
import Article from "./API/Article.jsx";

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
        path: "/episode/:id/:change/",
        element: (
          <>
            {" "}

            <Episode />
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
