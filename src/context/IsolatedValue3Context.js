import React, { useReducer } from "react";

const initialState = {
  value3: "3",
};

export const IsolatedValue3Context = React.createContext(initialState);

const Reducer = (state, action) =>
  ({
    SET_VALUE_3: (state) => ({ ...state, value3: action.value }),
  }[action.type](state));

export const IsolatedValue3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <IsolatedValue3Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </IsolatedValue3Context.Provider>
  );
};
