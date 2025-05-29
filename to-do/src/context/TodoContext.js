import { createContext , useContext } from "react";

export const Todocontext = createContext({});

export const useTodo = ()=>{
    useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider;