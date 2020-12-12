import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// user context
import { useUser } from "../../context/UserContext";

import { Wrapper, Main, Content, Sidebar } from "./styles";

import Categories from "../../components/Categories";
import Aside from "../../components/Aside";

import NavBar from "../../components/NavBar";

export default function Index() {
    const history = useHistory();
    const { signed } = useUser();

    useEffect(() => {
        if (!signed) {
            history.push("/");
        }
    }, []);

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
