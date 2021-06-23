import { createStore } from "redux";

const leftNavToggleReducer = (state, action) => {
  if (action.type === "visible") {
    return {
      visible: !state.visible,
    };
  }
  return state;
};

const store = createStore(leftNavToggleReducer, {
  visible: true,
});

export default store;
