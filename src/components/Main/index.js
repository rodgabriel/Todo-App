import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";

import { Container, Category, CategoryTitle } from "./styles";

import fireDb from "../../firebase";

export default function Index() {
    const [tasks, setTasks] = useState({});

    const categories = {
        "To do": { id: "0", type: "todo" },
        "In progress": { id: "1", type: "doing" },
        Done: { id: "2", type: "done" },
    };

    useEffect(() => {
        fireDb.child("tasks").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setTasks({ ...snapshot.val() });
            }
        });
    }, []);

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
        <Container>
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
                                    <Category
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver
                                                ? "#0099ff1f"
                                                : "transparent",
                                            marginRight: "4px",
                                        }}
                                    >
                                        <CategoryTitle>{key}</CategoryTitle>
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
                                );
                            }}
                        </Droppable>
                    );
                })}
            </DragDropContext>
        </Container>
    );
}
