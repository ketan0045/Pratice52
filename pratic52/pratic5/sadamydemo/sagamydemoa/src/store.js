// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootreducer";
import createSagaMiddleware from "redux-saga";
import blockSaga from "./redux/blockSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(blockSaga);
export default store;
