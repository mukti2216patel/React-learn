import { createSlice , nanoid} from "@reduxjs/toolkit";
const initialState = {
    todos:[{}]
};
const todoslice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state , action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state , action)=>{
            const id = action.payload;
            state.todos.filter((todo)=> todo.id !== id);

        }
    }
});
export const {addTodo , removeTodo} = todoslice.actions;
export const todoreducer =  todoslice.reducer;