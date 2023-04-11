import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import Button from "../UI/Button";
function TodosActions({deleteCompletedTodos,resetTodos,completedTodosExist}){
    return <>
        <Button
                onClick={resetTodos}
                title='Reset Todos'>
                <RiRefreshLine/>
        </Button>
        <Button
             onClick={deleteCompletedTodos}
             disabled={!completedTodosExist}
             title=' Clear Completed Todos'>
            <RiDeleteBin2Line/>
        </Button>
    </>
}
export default TodosActions