import styles from './TodoHeader.module.scss';
import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addTodo, addTodoText} from "../../app/Reducers/TodoReducer";


const TodoHeader: React.FC = () => {
    const {todoText} = useAppSelector(state => state.todoState);
    const dispatch = useAppDispatch();


    return (
        <div className={styles.header}>
            <input type="text"
                   value={todoText}
                   placeholder={"NEW TASK"}
                   onChange={(e) => dispatch(addTodoText(e.target.value))}
            />
            <button onClick={() => dispatch(addTodo())}>ADD</button>
        </div>
    )
}


export default TodoHeader;