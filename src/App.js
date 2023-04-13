import TodosActions from "./components/Todos/TodosActions";
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useState} from "react";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import './App.css';
function App() {
    const [todos,setTodos] = useState([])
    const addTodoHandler = async (text) =>{
        const newTodo ={
            text,
            isCompleted: false,
            id: uuidv4()
        }
        await setTodos([...todos,newTodo])
        const itemsString = JSON.stringify([...todos,newTodo] || [])
        localStorage.setItem('todos', itemsString)
    }

    useEffect(() => {
        const stringItems = localStorage.getItem('todos') || []
        if (stringItems.length === 0) {
            return null
        }
        const parse = JSON.parse(stringItems)
        setTodos(parse)
    }, [])

    const deleteTodoHandler = (id) =>{
        const filters = todos.filter((todo)=> todo.id !== id)
        setTodos(filters)
        localStorage.setItem('todos', JSON.stringify(filters))
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
