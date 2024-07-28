import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./contant";

export const productdata = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.log("PRODUCT_LIST condition",action);
    //   return [action.data];

      case SET_PRODUCT_LIST:
        console.log("SET_PRODUCT_LIST condition",action);
        return [...action.data];
    default:
      return data;
  }
};
