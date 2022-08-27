import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext({

});

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

//Create a provider component
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: "light",
  });

  
  const changeMode = (mode) => {
    dispatch({
      type: "TOGGLE_THEME",
      payload: mode,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
