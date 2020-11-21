import { useEffect, useState } from "react";

import Card from "./Card";

import { Container, Category, CategoryTitle } from "./styles";

import data from "../../fakedata.json";

export default function Index() {
    const categories = { "To do": "todo", "In progress": "doing", Done: "done" };
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(data).then(setTasks(data));
    }, []);

    // Drag and Drop methods for the Category Boards
    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData("card_id");

        const card = document.getElementById(card_id);
        card.style.display = "flex";

        e.target.appendChild(card);
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            {Object.keys(categories).map((category) => {
                return (
                    <Category
                        key={category}
                        id={category}
                        onDrop={drop}
                        onDragOver={dragOver}
                    >
                        <CategoryTitle>{category}</CategoryTitle>
                        {tasks
                            .filter((task) => {
                                return task.category === categories[category];
                            })
                            .map((task, index) => {
                                return (
                                    <Card
                                        key={`${task.task}_${category}_${index}`}
                                        id={`${task.task}_${category}_${index}`}
                                        task={task}
                                    ></Card>
                                );
                            })}
                    </Category>
                );
            })}
        </Container>
    );
}
