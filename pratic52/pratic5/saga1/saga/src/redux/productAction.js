import { PRODUCT_LIST, SERCH_PRODUCT, SET_PRODUCT_LIST } from "./contant";

export const productList =  () => {
//   let data = await fetch("jsonplaceholder.typicode.com/todos/1");
//   data = await data.json();
//   console.log(data, "datatttttt action called");
  return {
    type: PRODUCT_LIST,
    // data:"apple"
  };
};

// export const setproductList =  (data) => {
//       return {
//         type:SET_PRODUCT_LIST,
//         data
//       };
//     };


export const  productsearch = (query) => {
      return {
        type: SERCH_PRODUCT,
        query
      };
    };
    
