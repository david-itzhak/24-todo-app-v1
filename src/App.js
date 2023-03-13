import './App.css';
import {TodoForm, TodoList} from "./components/Todos";
import {useState} from "react";

function App() {
    let [todoList, setTodoList] = useState([]);

    const addTodoHandler = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    }
    console.log(todoList);

    const deleteTodoHandler = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index));
    }

    return (
        <div className="App">
            <h1>Todo app</h1>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList todoList={todoList} deleteTodo={deleteTodoHandler}/>
        </div>
    );
}

export default App;
