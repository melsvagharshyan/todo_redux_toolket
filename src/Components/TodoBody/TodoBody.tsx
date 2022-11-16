import React from "react";
import styles from './TodoBody.module.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteTodo, setCompleted} from "../../app/Reducers/TodoReducer";
import {MdClear} from 'react-icons/md'


const TodoBody: React.FC = () => {
    const {todos} = useAppSelector(state => state.todoState);
    const disptach = useAppDispatch();


    return (
        <div className={styles.todoBody}>
            {
                todos.map(t => (
                    <div key={t.id} className={styles.todoItem}>
                        <input type="checkbox"
                               checked={t.isCompleted}
                               onChange={(e) => disptach(setCompleted({id: t.id, completed: e.target.checked}))}
                        />
                        {t.isCompleted ? <del>{t.text}</del> : <p>{t.text}</p>}
                        <MdClear className={styles.deleteButton} onClick={() => disptach(deleteTodo(t.id))}/>
                    </div>
                ))
            }
        </div>
    )
}


export default TodoBody;