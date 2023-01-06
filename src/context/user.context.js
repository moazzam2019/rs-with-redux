import { createContext, useEffect, useState } from "react";

const getInitialUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : [];
};
const getInitialtoken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};
// the actual values that we want to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  token: "",
  setCurrentToken: () => "",
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getInitialUser);
  const [token, setCurrentToken] = useState(getInitialtoken);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const bearerToken = "Bearer " + token;
  const config = { headers: { authorization: bearerToken } };

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setCurrentToken,
    config,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// children are actually the components that are wrapped between this user provider or context

/*
import { createContext, useEffect, useReducer } from "react";

const getInitialUser = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  return user ? JSON.parse(user) : [];
};
const getInitialtoken = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? JSON.parse(token) : "";
};
// the actual values that we want to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  token: "",
  setCurrentToken: () => "",
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_CURRENT_TOKEN: "SET_CURRENT_TOKEN",
};

const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_CURRENT_TOKEN:
      return {
        token: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: getInitialUser(),
  token: getInitialtoken(),
};

export const UserProvider = ({ children }) => {
  const [{ currentUser, token }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const setCurrentToken = (token) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_TOKEN, payload: token });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  
  const bearerToken = "Bearer " + token;
  const config = { headers: { authorization: bearerToken } };

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setCurrentToken,
    config,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

*/
