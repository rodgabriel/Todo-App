import fireDb from "../../firebase";

// user context
import { useUser } from "../../context/UserContext";

import {
    CardContainer,
    Content,
    CardTitle,
    Urgency,
    Date,
    Buttons,
    DoneButton,
    DeleteButton,
} from "./styles";

export default function Card({ task, id, title }) {
    const { user } = useUser();
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

    const onDoneClick = () => {
        task.category !== "done" &&
            fireDb.child(`${user.id}`).child(id).child("category").set("done");
    };

    const onDeleteClick = () => {
        fireDb.child(`${user.id}`).child(id).remove();
    };

    return (
        <CardContainer
            id={id}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            <Content>
                <CardTitle>{title ? title : task.task}</CardTitle>

                <Urgency urgency={task.urgency}>{task.urgency}</Urgency>

                <Date>
                    <i className="far fa-calendar"></i>
                    <span>{task.dueDate.split("-").reverse().join("/")}</span>
                </Date>
            </Content>
            <Buttons>
                <DoneButton onClick={onDoneClick}>
                    <i className="far fa-check-circle"></i>
                </DoneButton>
                <DeleteButton onClick={onDeleteClick}>
                    <i className="far fa-times-circle"></i>
                </DeleteButton>
            </Buttons>
        </CardContainer>
    );
}
