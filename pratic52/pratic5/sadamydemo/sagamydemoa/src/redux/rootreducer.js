import { combineReducers } from "redux";
import { cardmmreducer } from "./reducer";
import { blockreducer } from "./blockReducer";

const rootReducer = combineReducers({ cardmmreducer, blockreducer });
export default rootReducer;
