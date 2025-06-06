import { configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "../features_todo/TodoSlice";
 export  const store = configureStore({
  reducer: todoreducer,
});


