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
                <Card>MAIN 1</Card>
                <Card>MAIN 2</Card>
                <Card>MAIN 3</Card>
            </Category>
            <Category>
                <CategoryTitle>In progress</CategoryTitle>
                <Card>MAIN 1</Card>
                <Card>MAIN 2</Card>
                <Card>MAIN 3</Card>
            </Category>
            <Category>
                <CategoryTitle>Done</CategoryTitle>
                <Card>MAIN 1</Card>
                <Card>MAIN 2</Card>
                <Card>MAIN 3</Card>
            </Category>
        </Container>
    );
}
