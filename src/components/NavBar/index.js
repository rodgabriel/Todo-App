import { Navbar } from "./styles";

import fireDb from "../../firebase";

export default function Index() {
    function writeUserData() {
        fireDb.child("tasks").push({
            task: "Tarefa 3 - Done",
            category: "done",
            dueDate: "12/12/2020",
            urgency: "urgent",
        });
    }
    return (
        <Navbar>
            <button onClick={writeUserData}>Go!</button>
        </Navbar>
    );
}
