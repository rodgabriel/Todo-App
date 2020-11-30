// user context
import { useUser } from "../../../context/UserContext";

import { AsideContainer } from "../styles";

export default function Aside() {
    const { tasks } = useUser();

    const today = new Date();

    return (
        <div
            style={{
                minHeight: "82.5vh",
                flex: 1.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "36px",
            }}
        >
            <AsideContainer>
                <small>Today is</small>
                <br />

                <h1>
                    {today.toLocaleDateString("pt-BR", {
                        month: "short",
                        day: "2-digit",
                    })}
                </h1>
            </AsideContainer>
            <AsideContainer>
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
            </AsideContainer>

            <AsideContainer>
                <h3>Quote of the day:</h3>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
                    voluptate quos, laborum quas at natus vero itaque suscipit labore
                    aliquam perspiciatis aut voluptatem...
                </p>
            </AsideContainer>
        </div>
    );
}
