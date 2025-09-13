import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: !!localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) :  [
    { id: 1, todoName: 'Snow', status: 'active', createdAt: 35 },
  ],
  reducers: {
    checkingAll: (state) => {
      state.forEach(todo => {
        todo.status = "completed";
      });
    },
    clearAll: () => {
      return [];
    },
    addnew : (state,action) => {
      console.log(action)
      state.push(action.payload)
      return state
    },
    setLocalStorage : (state) => {
      localStorage.setItem("todos",JSON.stringify(state))
      return state
    },
    deleteById: (state, action) => {
      return state.filter(element => element.id !== action.payload.id);
    },
    checkingById: (state, action) => {
      return state.map(element =>
        element.id === action.payload.id
          ? { ...element, status: element.status === "completed" ? "active" : "completed" }
          : element
      );
    },
    updateTodo: (state,action)=> {
      return state.map(todo => {
        if(todo.id === action.payload.id){
          return action.payload.todoInputs
        }else{
          return todo
        }
      })
    }
  },
});

export const { checkingAll, clearAll, checkingById, deleteById ,addnew,setLocalStorage,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
