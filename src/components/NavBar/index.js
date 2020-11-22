import { Navbar } from "./styles";

import fireDb from "../../firebase";

export default function Index() {
    function writeUserData() {
        fireDb.child("tasks").push({
            task: "Tarefa 4",
            category: "doing",
            dueDate: "12/12/2020",
            urgency: "important",
        });
    }
    return (
        <Navbar>
            <button onClick={writeUserData}>Go!</button>
        </Navbar>
    );
}
