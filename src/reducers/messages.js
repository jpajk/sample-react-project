
import { SUCCESS, ERROR, CLEAR_MESSAGE } from "../actions";

const messages = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        flashMessages: (() => {
          let messages = state.flashMessages.slice()
          messages.push({
            message: action.message,
            type: SUCCESS
          })
          return messages
        })(),
      };
    case ERROR:
      return {
        ...state,
        flashMessages: (() => {
          let messages = state.flashMessages.slice()
          messages.push({
            message: action.message,
            type: ERROR
          })
          return messages
        })(),
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        flashMessages: [],
      };
    default:
      return state
  }
};

export default messages
