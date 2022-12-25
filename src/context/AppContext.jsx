import { createContext } from "react";

export const Context = createContext();

export function AppContextProvider(props) {
  return <Context.Provider value={{}}>{props.children}
  </Context.Provider>;
}
