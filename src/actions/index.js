
export const LOGIN = 'LOGIN';

export const loginUser = function () {
  return {
    type: LOGIN
  }
}

export const apiLoginUser = function () {
  return dispatch => {
    window.console.log('yes')
  }
}
