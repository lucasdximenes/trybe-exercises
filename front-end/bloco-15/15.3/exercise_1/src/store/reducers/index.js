import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerCustomerReducer from "./registerCustomerReducer";

const rootReducer = combineReducers({
  loginReducer,
  registerCustomerReducer,
});

export default rootReducer;
