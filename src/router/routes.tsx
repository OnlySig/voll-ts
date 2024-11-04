import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LayoutPages from "../pages/LayoutPages";
import LayoutHomeAdmin from "../components/LayoutHomeAdmin";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPages/>,
    children: [
      {
        element: <LayoutHomeAdmin/>,
        children: [
          {
            path: "",
            element: <HomePage/>
          },          
          {
            path: "/dashboard",
            element: <Dashboard/>
          },          
        ]
      }
    ]
  }
]);

export default routes;