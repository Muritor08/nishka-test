import { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";


const token=JSON.parse(localStorage.getItem("token"))
const user=JSON.parse(localStorage.getItem("user"))
const INITIAL_STATE={
    token:token,
    user:user,
    isFetching:false,
    error:false
}

export const AppContext=createContext(INITIAL_STATE);
export const AppContextProvider=({children})=>{
   
  const [state,dispatch]=useReducer(AppReducer,INITIAL_STATE)
  
    
  
  return(
      <AppContext.Provider value={{token:state.token,user:state.user, isFetching:state.isFetching,error:state.error,dispatch}}>
          {children}
      </AppContext.Provider>
  )
}