import {useState} from "react";
import styles from './TodoForm.module.css';
function TodoForm({addTodo}) {
    let [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        text && addTodo(text);
        setText('');
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input type="text"
                       placeholder="Enter new todo"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;