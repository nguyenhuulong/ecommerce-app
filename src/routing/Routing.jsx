import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Layout from "../components/Layout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:slug" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Routing;
