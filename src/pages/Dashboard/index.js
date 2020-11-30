import { Wrapper, Main, Content, Aside, Container } from "./styles";

import Categories from "../../components/Categories";

import NavBar from "../../components/NavBar";

export default function Index() {
    return (
        <Wrapper>
            <NavBar />
            <Main>
                <Content>
                    <Categories />
                </Content>
                <Aside>
                    <Container>
                        Today is
                        <h1>{new Date().toLocaleDateString("pt-BR")}</h1>
                    </Container>

                    <Container>
                        You have:
                        <h1>3</h1>
                        <p>unfinished tasks</p>
                    </Container>

                    <Container>
                        <h3>Quote of the day</h3>
                        <br />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Quisquam labore nam explicabo minima iusto veritatis
                            perferendis ea laudantium libero sunt, excepturi ab
                            impedit numquam in quas maiores molestias commodi. Optio!
                        </p>
                    </Container>
                </Aside>
            </Main>
        </Wrapper>
    );
}
