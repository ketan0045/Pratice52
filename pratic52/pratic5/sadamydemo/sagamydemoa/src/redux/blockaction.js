import { BLOCK_GET_PRODUCTS, BLOCK_SET_PRODUCTS } from "./cont";

export const blocklist_getaction =  () => {
//   let apidata = await fetch("jsonplaceholder.typicode.com/todos/1");
//   apidata = await apidata.json();
//   console.log(apidata, "apidata");
  return {
    type: BLOCK_GET_PRODUCTS,
    // apidata:"apple"
  };
};

//aa direct block saga maathi reducer maa call thyu  export const blocklist_setaction =  (keydata) => {
//     console.log(keydata,"setttt")
//       return {
//         type:BLOCK_SET_PRODUCTS,
//         keydata
//       };
//     };
