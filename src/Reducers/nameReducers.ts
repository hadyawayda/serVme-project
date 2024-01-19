// import { Action } from "redux";

const initialState = {
  name: "",
};

const nameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default nameReducer;
