import { Container, Category, CategoryTitle, Card } from "./styles";

export default function index() {
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
