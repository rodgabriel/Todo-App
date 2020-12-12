import { Container } from "./styles";

// user context
import { useUser } from "../../context/UserContext";

export default function Index() {
    const { tasks } = useUser();
    return (
        <>
            <Container>
                <h2>Bem-vindo! Hoje é:</h2>
                <h1>
                    {new Date().getDate()}{" "}
                    {new Date().toLocaleString("pt-BR", { month: "short" })}
                    {/* {new Date().toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                    })} */}
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
                <p>tarefas para terminar</p>
            </Container>

            <Container>
                <h2>Frase do dia:</h2>
                <br />
                <p
                    style={{
                        textAlign: "justify",
                        textJustify: "inter-character",
                    }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam labore nam explicabo minima iusto veritatis perferendis
                    ea laudantium libero sunt, excepturi ab impedit numquam in quas
                    maiores molestias commodi. Optio!
                </p>
            </Container>
        </>
    );
}
