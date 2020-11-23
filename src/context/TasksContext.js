import { useState, useEffect, createContext, useContext } from "react";
import fireDb from "../firebase";

const TasksContext = createContext();

export function useTasks() {
    return useContext(TasksContext);
}

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        fireDb.child("tasks").on("value", (snapshot) => {
            if (snapshot.val() === null) {
                setTasks({});
            }
            if (snapshot.val() !== null) {
                setTasks({ ...snapshot.val() });
            }
        });
    }, []);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}
