import styles from './TodoForm.module.css'
import {useState} from "react";
function TodoForm({addTodo}){
    const [text,setText] = useState('')
    const onSubmitHandler = (event) =>{
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return <div className={styles.todoFormContainer}>
        <form onSubmit={onSubmitHandler}>
            <input value={text}
                   onChange={(e) => setText(e.target.value)}
                   placeholder='Enter new todo'
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
}
export default TodoForm