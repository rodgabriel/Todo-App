import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// tasks context
import { useTasks } from "../../context/TasksContext";

// firebase database
import fireDb from "../../firebase";

// components
import { Category, CategoryTitle } from "./styles";
import Card from "./Card";

export default function Categories() {
    const { tasks } = useTasks();

    const categories = {
        "To do": { id: "0", type: "todo" },
        "In progress": { id: "1", type: "doing" },
        Done: { id: "2", type: "done" },
    };

    const onDragEnd = (result) => {
        // Checks which category the task card was dropped into
        // and then changes the task category accordingly
        if (result.destination !== null) {
            switch (result.destination.droppableId) {
                case "0":
                    fireDb
                        .child("tasks")
                        .child(result.draggableId)
                        .child("category")
                        .set("todo");
                    break;
                case "1":
                    fireDb
                        .child("tasks")
                        .child(result.draggableId)
                        .child("category")
                        .set("doing");
                    break;
                case "2":
                    fireDb
                        .child("tasks")
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
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                    }}
                                >
                                    <CategoryTitle>{key}</CategoryTitle>
                                    <Category
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver
                                                ? "linear-gradient(to bottom, #0099ff1f, #0099ff00)"
                                                : Object.keys(tasks).length === 0
                                                ? "linear-gradient(to bottom, #0099ff11, #fff0)"
                                                : "transparent",
                                            marginRight: "4px",
                                        }}
                                    >
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
