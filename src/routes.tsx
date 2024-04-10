import { createBrowserRouter } from "react-router-dom";
import LayOut from "./pages/LayOut";
import HomePage from "./pages/HomePage";
import GameDetail from "./pages/GameDetail";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);
export default routes;
