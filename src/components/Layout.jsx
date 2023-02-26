import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

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
      <ProductViewModal />
    </div>
  );
};

export default Layout;
