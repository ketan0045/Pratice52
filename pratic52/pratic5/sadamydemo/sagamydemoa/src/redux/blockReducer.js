import {BLOCK_GET_PRODUCTS, BLOCK_SET_PRODUCTS } from "./cont";

export const blockreducer = (block2 = [], action) => {
  switch (action.type) {
    // jrur na pde hve biju call thyu tyare  case BLOCK_GET_PRODUCTS:
    //      return [action.apidata]
         case BLOCK_SET_PRODUCTS:
            return [...action.apidata]
    default:
      return block2;
  }
};