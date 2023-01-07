import { PRODUCTS_ACTIONS_TYPES } from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  searchProducts: "",
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    case PRODUCTS_ACTIONS_TYPES.SET_SEARCH_PRODUCTS:
      return { ...state, searchProducts: payload };
    default:
      return state;
  }
};
