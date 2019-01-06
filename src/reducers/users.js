const users = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user: 'myUser'};
    default:
      return state
  }
};

export default users
