import { LOGIN, LOGOUT } from "../actions";

const users = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.token, user: action.user};
    case LOGOUT:
      return {...state, user: action.user};
    default:
      return state
  }
};

export default users
