import { UsersTypes } from "../constants";

const users = (state = {}, action) => {
  switch (action.type) {
    case UsersTypes.LOGIN:
      return {...state, token: action.token, user: action.user};
    case UsersTypes.LOGOUT:
      return {...state, user: action.user};
    default:
      return state
  }
};

export default users
