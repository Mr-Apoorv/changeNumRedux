export const increaseNo = (num) => {
  return {
    type: "INCREASE",
    payload: num,
  };
};

export const decreaseNo = (num) => {
  return {
    type: "DECREASE",
    payload: num,
  };
};
