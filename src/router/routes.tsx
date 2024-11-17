import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LayoutHomeAdmin from "../components/LayoutHomeAdmin";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <LayoutHomeAdmin />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/cadastrar",
        element: <h1>Cadastro dahora</h1>,
      },
    ],
  },
]);

export default routes;
