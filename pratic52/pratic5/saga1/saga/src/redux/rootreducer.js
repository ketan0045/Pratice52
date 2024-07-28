import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productdata } from "./productReducer";
export default combineReducers({
  cartData,
  productdata,
});
