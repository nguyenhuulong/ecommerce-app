import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
