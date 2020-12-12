import { useEffect, useState } from "react";
import { Container } from "./styles";

// user context
import { useUser } from "../../context/UserContext";

export default function Index() {
    const { tasks } = useUser();
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch("https://quotes.rest/qod")
            .then((res) => res.json())
            .then((data) => setQuote(data.contents.quotes[0].quote));
    }, []);

    return (
        <>
            <Container>
                <h2>Bem-vindo! Hoje é:</h2>
                <h1>
                    {new Date().getDate()}{" "}
                    {new Date().toLocaleString("pt-BR", { month: "short" })}
                </h1>
            </Container>

            <Container>
                <h2>Você tem:</h2>
                <h1>
                    <strong>
                        {
                            Object.entries(tasks)
                                .map(([key, task]) => {
                                    return task;
                                })
                                .filter((task) => task.category !== "done").length
                        }
                    </strong>
                </h1>
                <small>tarefas para terminar</small>
            </Container>

            <Container>
                <h2>Quote of the day:</h2>
                <br />
                <p>{quote}</p>
            </Container>
        </>
    );
}
