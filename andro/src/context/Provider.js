import React, { createContext, useReducer } from "react";
import auth from "./reducers/authReducer";
import contacts from "./reducers/contactsReducer";
import authinitalstate from "./initialState/auth";
import contactsinitalstate from "./initialState/contacts";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authinitalstate);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsinitalstate
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
