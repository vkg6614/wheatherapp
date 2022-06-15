import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { weatherReducer } from "./Redux/Reducers/Reducers";

const middleware = [thunk];

const rootReducer = combineReducers({ weatherReducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
{
  /* <span class="material-symbols-sharp">partly_cloudy_day</span>; */
  //   <span class="material-symbols-sharp">cloudy_snowing</span>;
  //
}
