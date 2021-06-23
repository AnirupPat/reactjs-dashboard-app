import { createStore } from "redux";

const leftNavToggleReducer = (state, action) => {
  if (action.type === "visible") {
    return {
      visible: action.value,
    };
  } else return state;
};

const store = createStore(leftNavToggleReducer, {
  visible: true,
});

export default store;
