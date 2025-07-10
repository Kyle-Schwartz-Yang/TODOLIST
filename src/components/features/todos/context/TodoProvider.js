import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "./TodoContext";
export default function TodoProvider({ children }) {
    // -----------------------------------------
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState("");
    // --------------------------------------------------
    // Escape [modal and delete]
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                if (isOpenModal) {
                    setIsOpenModal(false); // Закриваємо модалку
                }
                else {
                    setTodos((prev) => prev.slice(1)); // Видаляємо задачу
                }
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpenModal]);
    // localStorage - show todo start APP
    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) {
            const stringTransforinArray = JSON.parse(saved);
            setTodos(stringTransforinArray);
        }
    }, []);
    // localStorage - save change todo
    useEffect(() => {
        const arrayTransforminString = JSON.stringify(todos);
        localStorage.setItem("todos", arrayTransforminString);
        setCount(todos.length);
    }, [todos]);
    // -----------------------------------------------------
    const openConfirmTaskModal = (id) => {
        setTaskIdToDelete(id);
        setIsOpenModal(true);
    };
    const handleDelete = () => {
        setTodos(todos.filter((item) => item.id !== taskIdToDelete));
        setTaskIdToDelete("");
        setIsOpenModal(false);
        toast.success("DONE!");
    };
    const toggleComplete = (id) => {
        let shouldShowToast = false;
        const updatedTodos = todos.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, complete: !item.complete };
                if (updatedItem.complete)
                    shouldShowToast = true;
                return updatedItem;
            }
            return item;
        });
        setTodos(updatedTodos);
        if (shouldShowToast) {
            toast.success("Виконано!");
        }
    };
    const toggleIsEdit = (id) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, isEdit: !item.isEdit } : item));
    };
    const onEdit = (value, id) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, text: value, isEdit: !item.isEdit } : item));
    };
    const value = {
        count,
        isOpenModal,
        setIsOpenModal,
        todos,
        setTodos,
        openConfirmTaskModal,
        handleDelete,
        toggleComplete,
        toggleIsEdit,
        onEdit,
    };
    return _jsx(TodoContext.Provider, { value: value, children: children });
}
