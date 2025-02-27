// eslint-disable-next-line
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import appointmentReducer from "./reducers/appointmentReducer";

const store = createStore(appointmentReducer, applyMiddleware(thunk));

export default store;
