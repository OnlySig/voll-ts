import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Nav";

const LayoutHomeAdmin = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutHomeAdmin;
