import { takeEvery,put,call} from "redux-saga/effects";
import { PRODUCT_LIST, SERCH_PRODUCT, SET_PRODUCT_LIST } from "./contant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
 yield put({type:SET_PRODUCT_LIST,data})
//  yield put({type:SET_PRODUCT_LIST,data:data})
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.log("======",data)
   yield put({type:SET_PRODUCT_LIST,data:result})
  }

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
 yield takeEvery(SERCH_PRODUCT, searchProducts);
}


export default productSaga;


