import { createStore } from "redux";

const leftNavToggleReducer = (state, action) => {
  if (action.type === "visible") {
    return {
      ...state,
      visible: action.value,
    };
  }
  if (action.type === "selectedKPI") {
    return {
      ...state,
      selectedKPI: {
        heading: action.value.heading,
        subHeading: action.value.subHeading,
      },
    };
  } else return state;
};

const store = createStore(leftNavToggleReducer, {
  visible: true,
  selectedKPI: {
    heading: "",
    subHeading: "",
  },
});

export default store;
