import { createStore } from "redux";
import { reducer_task } from "../reducer/reducer_task";

export const store = createStore(
  reducer_task,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
