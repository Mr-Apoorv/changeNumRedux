const initialState = 50;

const changeTheNum = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    default:
      return state;
  }
};

export default changeTheNum;
