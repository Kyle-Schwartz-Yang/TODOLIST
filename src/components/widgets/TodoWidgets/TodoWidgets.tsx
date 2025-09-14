import TodoConfirmModal from "@features/TodoConfirmModal/TodoConfirmModal";
import {useTodos} from "@entities/Todos/model";
import {TodoPanel, TodoList} from "@components/entities/Todos/ui";
import {deleteTodo, clearTodoToDelete} from "@entities/Todos/model/actions";

export default function TodoWidgets() {
    const {todoToDelete, dispatch} = useTodos();

    const onDeleteTodo = () => {
        if (!todoToDelete) return;
        dispatch(deleteTodo(todoToDelete.id))
        dispatch(clearTodoToDelete())
    };

    const onCanselDelete = () => {
        dispatch(clearTodoToDelete())
    }

    return (
        <main className="main">
            <section className="todo">
                <div className="todo__container">
                    <TodoPanel/>
                    <TodoList/>
                </div>
            </section>
            {!!todoToDelete && <TodoConfirmModal onConfirm={onDeleteTodo} onCansel={onCanselDelete}/>}
        </main>
    );
}
