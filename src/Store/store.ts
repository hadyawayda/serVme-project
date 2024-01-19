import { legacy_createStore as createStore } from "redux";
import nameReducer from "../Reducers/nameReducers";

const store = createStore(nameReducer);

export default store;
