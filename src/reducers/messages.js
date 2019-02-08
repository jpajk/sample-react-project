
import { MessageTypes } from "../constants";

const messages = (state = {}, action) => {
  switch (action.type) {
    case MessageTypes.SUCCESS:
      return {
        ...state,
        flashMessages: (() => {
          let messages = state.flashMessages.slice()
          messages.push({
            message: action.message,
            type: MessageTypes.SUCCESS
          })
          return messages
        })(),
      };
    case MessageTypes.ERROR:
      return {
        ...state,
        flashMessages: (() => {
          let messages = state.flashMessages.slice()
          messages.push({
            message: action.message,
            type: MessageTypes.ERROR
          })
          return messages
        })(),
      };
    case MessageTypes.CLEAR_MESSAGE:
      return {
        ...state,
        flashMessages: [],
      };
    default:
      return state
  }
};

export default messages
