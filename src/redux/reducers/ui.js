import { SWITCH_THEM_MODE } from "../actions";
const defaultState = {
  isDarkModeOn: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_THEM_MODE:
      return { ...state, isDarkModeOn: !state.isDarkModeOn };
    default:
      return state;
  }
};
