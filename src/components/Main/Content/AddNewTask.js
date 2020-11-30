import { useState, useRef } from "react";
import { CardContainer, Content } from "../styles";

// user context
import { useUser } from "../../../context/UserContext";

import fireDb from "../../../firebase";

export default function AddNewTask({ category, setShowAddNewTask }) {
    const { user } = useUser();
    const taskName = useRef();

    const [newTask, setNewTask] = useState({
        task: "",
        category: category,
        dueDate: "",
        urgency: "",
    });

    const onInputChange = (e) => {
        if (e.target.name === "task") {
            taskName.current.style.borderBottom = "2px solid #00883033";
        }

        setNewTask({
            ...newTask,
            [e.target.name]: String(e.target.value),
        });
    };

    const onAddNewTaskClick = () => {
        if (newTask.task !== "") {
            console.log(user.id);
            fireDb.child(`${user.id}`).push(newTask);
            setShowAddNewTask({
                show: false,
            });
        } else {
            taskName.current.style.borderBottom = "4px solid #f88080";
            console.error("Task can't be empty");
        }
    };

    return (
        <CardContainer background="#30986011">
            <Content>
                <input
                    type="text"
                    name="task"
                    value={newTask.task}
                    onChange={(e) => onInputChange(e)}
                    placeholder="New task..."
                    ref={taskName}
                />
                <select
                    name="urgency"
                    value={newTask.urgency}
                    onChange={(e) => {
                        onInputChange(e);
                    }}
                    className={`${newTask.urgency}`}
                >
                    <option value="">How urgent is your task?</option>
                    <option>Urgent</option>
                    <option>Important</option>
                </select>

                <input
                    type="date"
                    placeholder="Due date: &nbsp;"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={(e) => onInputChange(e)}
                />

                <button onClick={onAddNewTaskClick}>Add task</button>
            </Content>
        </CardContainer>
    );
}
