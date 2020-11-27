// user context
import { useUser } from "../../context/UserContext";

// styled components
import { Wrapper, TasksContainer, Aside } from "./styles";

// compenents
import Categories from "./Categories";

export default function Content() {
    const { tasks } = useUser();
    return (
        <Wrapper>
            <TasksContainer>
                <Categories tasks={tasks}></Categories>
            </TasksContainer>

            <Aside>
                <h3>Tasks to finish:</h3>
                <div className="text">
                    <div className="number">
                        {
                            Object.entries(tasks)
                                .map(([key, task]) => {
                                    return task;
                                })
                                .filter((task) => task.category !== "done").length
                        }
                    </div>{" "}
                    <div className="un">unfinished tasks</div>
                </div>
            </Aside>
        </Wrapper>
    );
}
