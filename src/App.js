import TodosActions from "./components/Todos/TodosActions";
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import './App.css';
function App() {
    const [todos,setTodos] = useState([])
    const addTodoHandler = (text) =>{
        const newTodo ={
            text,
            isCompleted: false,
            id: uuidv4()
        }
        setTodos([...todos,newTodo])
    }
    const deleteTodoHandler = (id) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const toggleTodoHandler = (id) =>{
        setTodos(todos.map((todo) =>
             todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        )
        )
    }
    const resetTodosHandler = () =>{
        setTodos([])
    }
    const deleteCompletedTodosHandler = () =>{
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }
    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  return (
      <div className="App">
          <h1>Todo App</h1>
          <TodoForm addTodo={addTodoHandler}/>
          {!todos.length ?<h2>Todo list is empty</h2>
              :
              <TodosActions completedTodosExist={!!completedTodosCount}
                            deleteCompletedTodos={deleteCompletedTodosHandler}
                            resetTodos={resetTodosHandler}
          />}

          <TodoList toggleTodo={toggleTodoHandler}
                    deleteTodo={deleteTodoHandler}
                    todos={todos}
          />
          {!!completedTodosCount && <h3>Todo list completed {completedTodosCount}</h3>}
      </div>

  );
}

export default App;
