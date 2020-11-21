import { CardContainer, CardTitle, Urgency, Date } from "./styles";

export default function Card({ task, id }) {
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("card_id", target.id);

        target.style.opacity = "0.4";
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };

    const dragEnd = (e) => {
        e.target.style.opacity = "1";
    };

    return (
        <CardContainer
            id={id}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            <CardTitle>
                <i className="far fa-check-circle"></i>
                {task.task}
            </CardTitle>
            {task.urgency && (
                <Urgency urgency={task.urgency}>{task.urgency}</Urgency>
            )}

            <Date>
                <i className="far fa-calendar"></i>
                <span>{task.dueDate}</span>
            </Date>
        </CardContainer>
    );
}
