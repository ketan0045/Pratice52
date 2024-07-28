import { ADDCARDMM, EMPTYCARDMM, REMOVECARDMM } from "./cont";

export const cardmmreducer = (block = [], action) => {
  switch (action.type) {
    case ADDCARDMM:
      return [action.payload1, ...block];
    case REMOVECARDMM:
      block.length = block.length ? block.length - 1 : [];
      return [...block];
    case EMPTYCARDMM:
      block = [];
      return [...block];
    default:
      return block;
  }
};
