import { Container } from "./styles";

export default function Index() {
    return (
        <>
            <Container>
                Today is
                <h1>
                    {new Date().toLocaleDateString("en-gb", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                    })}
                </h1>
            </Container>

            <Container>
                You have:
                <h1>3</h1>
                <p>unfinished tasks</p>
            </Container>

            <Container>
                <h3>Quote of the day</h3>
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
