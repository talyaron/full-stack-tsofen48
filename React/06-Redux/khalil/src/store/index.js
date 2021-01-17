import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";
const enhancer =
  process.env.NODE_ENV === "development" ? devToolsEnhancer() : null;
const store = createStore(rootReducer, enhancer);
export default store;