import { PRODUCTS_ACTIONS_TYPES } from "./products.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setProducts = (products) => {
  return createAction(PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS, products);
};

export const setSearchProducts = (searchProducts) => {
  return createAction(
    PRODUCTS_ACTIONS_TYPES.SET_SEARCH_PRODUCTS,
    searchProducts
  );
};
