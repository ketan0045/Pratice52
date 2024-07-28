import { ADDCARDMM, EMPTYCARDMM, REMOVECARDMM } from "./cont";

export const addcardmmaction = (payload1) => {
  return {
    type: ADDCARDMM,
    payload1,
  };
};

export const removecardmmaction = (payload2) => {
  return {
    type: REMOVECARDMM,
    payload2,
  };
};

export const emptycardmmaction = () => {
  return {
    type: EMPTYCARDMM,
  };
};
