import { ADD_TO_CART, EMPTY_CARD, REMOVE_FROM_CART } from "./contant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removefromcard = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptycard = () => {
  console.log("action is removefromcard");
  return {
    type: EMPTY_CARD,
  };
};
