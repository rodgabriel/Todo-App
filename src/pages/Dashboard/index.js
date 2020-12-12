import { Wrapper, Main, Content, Sidebar } from "./styles";

import Categories from "../../components/Categories";
import Aside from "../../components/Aside";

import NavBar from "../../components/NavBar";

export default function Index() {
    return (
        <Wrapper>
            <NavBar />
            <Content>
                <Main>
                    <Categories />
                </Main>
                <Sidebar>
                    <Aside />
                </Sidebar>
            </Content>
        </Wrapper>
    );
}
