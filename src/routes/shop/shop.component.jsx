import { Routes, Route } from "react-router-dom";
import ProductsPreview from "../products/products-preview.component.jsx";
import Category from "../category/category.component";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../../store/products/products.action.js";
import "./shop.styles.scss";
import { useDispatch } from "react-redux";
import SearchPage from "../search-page/search-page.component.jsx";
import UpdateProduct from "../crud/update-product.component.jsx";
import DeleteProduct from "../crud/delete-product.component.jsx";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const API = "https://light-crow-kerchief.cyclic.app/api/phones";
      await axios.get(API).then((res) => {
        dispatch(setProducts(res.data.data.phones));
      });
    };
    getProducts();
  }, []);
  return (
    <Routes>
      <Route index element={<ProductsPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path="search-page" element={<SearchPage />} />
      <Route path="update-product" element={<UpdateProduct />} />
      <Route path="delete-product" element={<DeleteProduct />} />
    </Routes>
  );
};

export default Shop;
