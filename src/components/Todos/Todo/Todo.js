import {RiTodoFill} from "react-icons/ri";
import styles from './Todo.module.css';

function Todo({todoText, deleteTodo, index}) {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todoText}</div>
        </div>
    );
}

export default Todo;