import { ADD_TO_CART, EMPTY_CARD, REMOVE_FROM_CART } from "./contant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition ", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", action);
      // data.length = data.length - 1;
      // data.length = data.length ? data.length - 1 : [];
      const remainingItem = data.filter((item) => { return item.id != action.data });    
      console.log(remainingItem,"remainingItem")
      return [...remainingItem];
    case EMPTY_CARD:
      console.log("EMPTY_CARD_CART", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
