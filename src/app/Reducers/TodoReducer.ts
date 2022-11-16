import {createSlice} from "@reduxjs/toolkit";
import {todoStateType} from "../Types/TodoType";




const initialState: todoStateType = {
    todos: [],
    todoText: ""
}


const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodoText(state, action) {
            state.todoText = action.payload;
        },
        addTodo(state) {
            if (state.todoText.trim().length === 0 || state.todoText.length > 29) {
                return;
            }
            state.todos.unshift({id: Math.random(), text: state.todoText, isCompleted: false});
            state.todoText = "";
        },
        setCompleted(state, action) {
            state.todos = state.todos.map(t => {
                if(t.id === action.payload.id){
                    return {...t, isCompleted: action.payload.completed};
                }
                return t;
            });
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(t => t.id !== action.payload);
        },
        deleteCompletedTodos(state) {
            state.todos = state.todos.filter(t => t.isCompleted !== true);
        }
    }
});


export const {addTodoText, addTodo, setCompleted, deleteTodo, deleteCompletedTodos} = todoReducer.actions;

export default todoReducer.reducer;
