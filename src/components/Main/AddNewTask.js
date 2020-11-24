import { useState, useRef } from "react";
import { CardContainer, Content, Buttons } from "./styles";

export default function AddNewTask({ category }) {
    const taskName = useRef();

    const [newTask, setNewTask] = useState({
        task: "",
        category: category,
        dueDate: "",
        urgency: "",
    });

    const onInputChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: String(e.target.value),
        });
    };

    const onAddNewTaskClick = () => {
        if (newTask.task !== "") {
            taskName.current.style.background = "transparent";
            console.log("sucess");
        } else {
            taskName.current.style.background = "#f8808066";
            console.log("such empty");
        }
    };

    return (
        <CardContainer>
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
