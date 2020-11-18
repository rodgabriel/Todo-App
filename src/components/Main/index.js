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
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(data).then(setTasks(data));
    }, []);

    return (
        <Container>
            <Category>
                <CategoryTitle>To do</CategoryTitle>
                {tasks.map((task) => {
                    return (
                        <Card key={task.task}>
                            <CardTitle>{task.task}</CardTitle>
                            {task.urgency && (
                                <Urgency urgency={task.urgency}>
                                    {task.urgency}
                                </Urgency>
                            )}

                            <Date>{task.dueDate}</Date>
                        </Card>
                    );
                })}
            </Category>
            <Category>
                <CategoryTitle>In progress</CategoryTitle>
                {tasks
                    .filter((task) => {
                        return task.category === "doing";
                    })
                    .map((task, index) => {
                        return (
                            <Card>
                                <CardTitle>{task.task}</CardTitle>
                                <Urgency>{task.urgency}</Urgency>
                                <span>{task.dueDate}</span>
                                <br />
                                <span>{task.category}</span>
                            </Card>
                        );
                    })}
            </Category>
            <Category>
                <CategoryTitle>Done</CategoryTitle>
                {tasks
                    .filter((task) => {
                        return task.category === "done";
                    })
                    .map((task, index) => {
                        return (
                            <Card>
                                <CardTitle>{task.task}</CardTitle>
                                <Urgency>{task.urgency}</Urgency>
                                <span>{task.dueDate}</span>
                                <br />
                                <span>{task.category}</span>
                            </Card>
                        );
                    })}
            </Category>
        </Container>
    );
}
