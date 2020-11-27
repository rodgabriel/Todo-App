import { useState } from "react";

// user context
import { useUser } from "../../context/UserContext";

// drag and drop
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// firebase database
import fireDb from "../../firebase";

// components
import { Category, CategoryHeader } from "./styles";
import Card from "./Card";
import AddNewTask from "./AddNewTask";

export default function Categories({ tasks }) {
    const { user } = useUser();
    const [showAddNewTask, setShowAddNewTask] = useState({
        show: false,
        category: null,
    });

    const categories = {
        "To do": { id: "0", type: "todo" },
        "In progress": { id: "1", type: "doing" },
        Done: { id: "2", type: "done" },
    };

    const onAddNewTaskClick = (category) => {
        setShowAddNewTask({
            show: true,
            category: category,
        });
        if (showAddNewTask.show === true && showAddNewTask.category === category) {
            setShowAddNewTask({
                show: false,
            });
        }
    };

    const onDragEnd = (result) => {
        // Checks which category the task card was dropped into
        // and then changes the task category accordingly
        if (result.destination !== null) {
            switch (result.destination.droppableId) {
                case "0":
                    fireDb
                        .child(`${user.id}`)
                        .child(result.draggableId)
                        .child("category")
                        .set("todo");
                    break;
                case "1":
                    fireDb
                        .child(`${user.id}`)
                        .child(result.draggableId)
                        .child("category")
                        .set("doing");
                    break;
                case "2":
                    fireDb
                        .child(`${user.id}`)
                        .child(result.draggableId)
                        .child("category")
                        .set("done");
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            {Object.entries(categories).map(([key, category]) => {
                return (
                    <Droppable
                        droppableId={category.id}
                        key={category.id}
                        category={category.type}
                    >
                        {(provided, snapshot) => {
                            return (
                                <div
                                    key={key}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                    }}
                                >
                                    <CategoryHeader>
                                        <div className="category-header-title">
                                            {key}
                                        </div>

                                        <div
                                            className={`category-header-btn ${
                                                showAddNewTask.show &&
                                                showAddNewTask.category ===
                                                    category.type
                                                    ? "closeNew"
                                                    : ""
                                            }`}
                                        >
                                            <i
                                                class="fas fa-plus"
                                                onClick={() =>
                                                    onAddNewTaskClick(category.type)
                                                }
                                            ></i>
                                        </div>
                                    </CategoryHeader>
                                    <Category
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver
                                                ? "linear-gradient(to bottom, #0099ff1f, #0099ff00)"
                                                : Object.keys(tasks).length === 0
                                                ? "linear-gradient(to bottom, #0099ff11, #fff0)"
                                                : "transparent",
                                        }}
                                    >
                                        {showAddNewTask.show &&
                                        showAddNewTask.category === category.type ? (
                                            <AddNewTask
                                                setShowAddNewTask={setShowAddNewTask}
                                                category={`${category.type}`}
                                            />
                                        ) : null}
                                        {Object.entries(tasks)
                                            .filter((task) => {
                                                return (
                                                    task[1].category ===
                                                    category.type
                                                );
                                            })
                                            .map(([id, task], index) => {
                                                return (
                                                    <Draggable
                                                        key={id}
                                                        draggableId={id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    ref={
                                                                        provided.innerRef
                                                                    }
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        width:
                                                                            "100%",
                                                                        ...provided
                                                                            .draggableProps
                                                                            .style,
                                                                    }}
                                                                >
                                                                    <Card
                                                                        id={id}
                                                                        task={task}
                                                                    />
                                                                </div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                        {provided.placeholder}
                                    </Category>
                                </div>
                            );
                        }}
                    </Droppable>
                );
            })}
        </DragDropContext>
    );
}
