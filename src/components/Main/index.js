import { useEffect, useState } from "react";
import { Container, Category, CategoryTitle, Card } from "./styles";

import data from "../../fakedata.json";

export default function Index() {
    const [tasks, setTasks] = useState({});
    useEffect(() => {
        fetch(data).then(setTasks(data)).then(console.log(tasks));
    }, [tasks]);

    return (
        <Container>
            <Category>
                <CategoryTitle>To do</CategoryTitle>
                {tasks
                    .filter((task) => {
                        return task.category === "todo";
                    })
                    .map((task, index) => {
                        return (
                            <Card>
                                <h3>
                                    {`# ${index}`} {task.task}
                                </h3>
                                <span>{task.urgency}</span>
                                <span>{task.dueDate}</span>
                                <br />
                                <span>{task.category}</span>
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
                                <h3>
                                    {`# ${index}`} {task.task}
                                </h3>
                                <span>{task.urgency}</span>
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
                                <h3>
                                    {`# ${index}`} {task.task}
                                </h3>
                                <span>{task.urgency}</span>
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
