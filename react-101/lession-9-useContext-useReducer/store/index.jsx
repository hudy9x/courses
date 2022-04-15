import { createContext, useReducer } from "react";
import { initialTodos, reducer } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <StoreContext.Provider value={{ todos, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
