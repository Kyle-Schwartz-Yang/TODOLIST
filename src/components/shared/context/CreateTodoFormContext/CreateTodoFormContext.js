import React from "react";
const defaultContextValue = {
    input: "",
    handleCreateTask: () => { },
    onChange: () => { },
    inputAdd: { current: null },
};
const CreateTodoFormContext = React.createContext(defaultContextValue);
export default CreateTodoFormContext;
