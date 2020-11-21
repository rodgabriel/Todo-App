import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

import Card from "./Card";

import { Container, Category, CategoryTitle } from "./styles";

import data from "../../fakedata.json";

export default function Index() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(data).then(setTasks(data));
    }, []);

    const categories = {
        [uuid()]: {
            name: "Todo",
            items: tasks.filter((task) => task.category === "todo" && task),
        },
        [uuid()]: {
            name: "In progress",
            items: tasks.filter((task) => task.category === "doing" && task),
        },
        [uuid()]: {
            name: "Done",
            items: tasks.filter((task) => task.category === "done" && task),
        },
    };

    const [allCategories, setAllCategories] = useState(categories);

    // Drag and Drop methods for the Category Boards
    const onDragEnd = (result, allCategories, setAllCategories) => {
        const { source, destination } = result;

        if (!destination) return;
        if (source.droppableId !== destination.droppableId) {
            const sourceCategory = allCategories[source.droppableId];
            const destinationCategory = allCategories[destination.droppableId];
            const sourceTasks = [...sourceCategory.items];
            const destinationTasks = [...destinationCategory.items];
            const [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);

            setAllCategories({
                ...allCategories,
                [source.droppableId]: {
                    ...sourceCategory,
                    items: sourceTasks,
                },
                [destination.droppableId]: {
                    ...destinationCategory,
                    items: destinationTasks,
                },
            });
        } else {
            const category = categories[source.droppableId];
            const copiedTasks = [...category.items];

            const [removed] = copiedTasks.splice(source.index, 1);

            copiedTasks.splice(destination.index, 0, removed);

            setAllCategories({
                ...allCategories,
                [source.droppableId]: {
                    ...category,
                    items: copiedTasks,
                },
            });
        }
    };

    return (
        <Container>
            <DragDropContext
                onDragEnd={(result) =>
                    onDragEnd(result, allCategories, setAllCategories)
                }
            >
                {Object.keys(categories).map((category, id) => {
                    return (
                        <Droppable droppableId={String(id)} key={String(id)}>
                            {(provided, snapshot) => {
                                return (
                                    <Category
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver
                                                ? "lightcoral"
                                                : "lightgrey",
                                            marginRight: "4px",
                                        }}
                                    >
                                        {categories[category].items.map(
                                            (item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.task}
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
                                                                        task={item}
                                                                    ></Card>
                                                                </div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            }
                                        )}
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
