import React, { useReducer } from "react";

const initialState = {
  value1: "1",
  value2: "2",
  value3: "3",
};

export const AppContext = React.createContext(initialState);

const Reducer = (state, action) =>
  ({
    SET_VALUE_1: (state) => ({ ...state, value1: action.value }),
    SET_VALUE_2: (state) => ({ ...state, value2: action.value }),
    SET_VALUE_3: (state) => ({ ...state, value3: action.value }),
  }[action.type](state));

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
