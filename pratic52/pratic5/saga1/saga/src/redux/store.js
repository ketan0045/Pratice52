// import {createStore} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import producrSaga from "./productSaga";
import rootreducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";

// const store = createStore({  rootreducer });

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootreducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(producrSaga);

export default store;
