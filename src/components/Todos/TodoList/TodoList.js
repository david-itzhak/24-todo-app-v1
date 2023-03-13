import Todo from "../Todo";
import styles from "./TodoList.css";

function TodoList({todoList, deleteTodo}) {

    const getTodoListFromArray = () => {
        return todoList.map((todoText, index) => <Todo todoText={todoText} key={index} deleteTodo={deleteTodo}
                                                       index={index}/>);
    }

    const getEmptyListMessage = () => {
        return <h2>Todo list is empty</h2>;
    }

    return (
        <div className={styles.todoListContainer}>
            {todoList.length ? getTodoListFromArray() : getEmptyListMessage()}
        </div>
    );
}

export default TodoList;