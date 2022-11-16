import styles from './Todo.module.scss';
import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoBody from "../TodoBody/TodoBody";
import TodoFooter from "../TodoFooter/TodoFooter";


const Todo: React.FC = () => {


    return (
        <div className={styles.todo}>
            <TodoHeader/>
            <TodoBody/>
            <TodoFooter/>
        </div>
    )
}


export default Todo;