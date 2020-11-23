// compenents
import Categories from "./Categories";

// styled components
import { Wrapper, TasksContainer, Aside } from "./styles";

// tasks context
import { useTasks } from "../../context/TasksContext";

export default function Index() {
    const { tasks } = useTasks();

    return (
        <Wrapper>
            <TasksContainer>
                <Categories></Categories>
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
