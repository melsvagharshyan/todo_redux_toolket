import styles from './TodoFooter.module.scss';
import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteCompletedTodos} from "../../app/Reducers/TodoReducer";


const TodoFooter: React.FC = () => {
    const {todos} = useAppSelector(state => state.todoState);
    const dispatch = useAppDispatch();


    let todosCount = todos.length;
    let completedTodosCount = todos.filter(t => t.isCompleted === true).length;

    return (
        <div className={styles.todoFooter}>
            <span>{`COMPLETED ${completedTodosCount}/${todosCount}`}</span>
            <button onClick={() => dispatch(deleteCompletedTodos())}>CLEAR</button>
        </div>
    )
}

export default TodoFooter;