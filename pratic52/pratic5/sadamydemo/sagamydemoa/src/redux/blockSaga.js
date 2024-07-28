// 1....pela banavu AATLU
// GENERATOR FUNCTION ASYNC ACTION HANDLE KRVA MAATE
// function*  blockSaga(){
// }
// export default blockSaga; JJJJ

// pchi store maa chatup krvu

import { takeEvery, put } from "redux-saga/effects";
import { BLOCK_GET_PRODUCTS, BLOCK_SET_PRODUCTS } from "./cont";

function* datalist() {
  let apidata = yield fetch("http://localhost:4500/products");
  // await replace to yield because async operation
  apidata = yield apidata.json();

  //   console.log(apidata, "apidata");
  //   put methode to call action
  yield put({ type: BLOCK_SET_PRODUCTS, apidata });

  // (:: upar nu action maa na jay direct go to reducer ===  yield put({type:BLOCK_SET_PRODUCTS,apidata}))
}

function* blockSaga() {
  yield takeEvery(BLOCK_GET_PRODUCTS, datalist);
}
export default blockSaga;
