import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUESTING } from "../action/Auth";
const auth = (
  state = { token: "", isAuthenticated: false, isRequesting: false },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return Object.assign({}, state, { isRequesting: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.token,
        isAuthenticated: true,
        isRequesting: false
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isRequesting: false
      });

    default:
      return state;
  }
};

export default auth;
