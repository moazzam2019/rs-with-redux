import { USER_ACTION_TYPES } from "./user.types";

const getInitialUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};
const getInitialtoken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};
// the actual values that we want to access

export const INITIAL_STATE = {
  currentUser: getInitialUser(),
  token: getInitialtoken(),
};
const bearerToken = "Bearer " + INITIAL_STATE.token;
export const config = { headers: { authorization: bearerToken } };

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(currentUser));
  // }, [currentUser]);
  // useEffect(() => {
  //   localStorage.setItem("token", JSON.stringify(token));
  // }, [token]);

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_CURRENT_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
