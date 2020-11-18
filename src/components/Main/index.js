import { useEffect, useState } from "react";
import {
    Container,
    Category,
    CategoryTitle,
    Card,
    CardTitle,
    Urgency,
    Date,
} from "./styles";

import data from "../../fakedata.json";

export default function Index() {
    const categories = { "To do": "todo", "In progress": "doing", Done: "done" };
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(data).then(setTasks(data));
    }, []);

    return (
        <Container>
            {Object.keys(categories).map((category) => {
                return (
                    <Category>
                        <CategoryTitle>{category}</CategoryTitle>
                        {tasks
                            .filter((task) => {
                                return task.category === categories[category];
                            })
                            .map((task) => {
                                return (
                                    <Card key={task.task}>
                                        <CardTitle>
                                            <i class="far fa-check-circle"></i>
                                            {task.task}
                                        </CardTitle>
                                        {task.urgency && (
                                            <Urgency urgency={task.urgency}>
                                                {task.urgency}
                                            </Urgency>
                                        )}

                                        <Date>
                                            <i className="far fa-calendar"></i>
                                            <span>{task.dueDate}</span>
                                        </Date>
                                    </Card>
                                );
                            })}
                    </Category>
                );
            })}
        </Container>
    );
}
