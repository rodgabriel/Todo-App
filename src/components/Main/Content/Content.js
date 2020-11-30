// user context
import { useUser } from "../../../context/UserContext";

// styled components
import { Wrapper, TasksContainer } from "../styles";

// compenents
import Categories from "./Categories";
import Aside from "./Aside";

export default function Content() {
    const { tasks } = useUser();
    return (
        <Wrapper>
            <TasksContainer>
                <Categories tasks={tasks}></Categories>
            </TasksContainer>

            <Aside></Aside>
        </Wrapper>
    );
}
