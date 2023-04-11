import styles from './Todo.module.css'
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'

function Todo({todo,deleteTodo,toggleTodo}){
    return <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
        <RiTodoFill className={styles.todoIcon}/>
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} className={styles.deleteIcon}/>
        <FaCheck onClick={() => toggleTodo(todo.id)} className={styles.checkIcon}/>
    </div>
}
export default Todo