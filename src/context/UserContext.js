import { createContext, useState, useContext, useEffect } from "react";

import fireDb from "../firebase";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({ name: "", img: "", id: "" });
    const [auth, setAuth] = useState();
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "136405787613-mcceo4l6g8j8mds64ui0cld2mi5mjl08.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    setAuth(window.gapi.auth2.getAuthInstance());
                    setSigned(auth.isSignedIn.get());
                });
        });
    }, []);

    useEffect(() => {
        fireDb.child("tasks").on("value", (snapshot) => {
            if (snapshot.val() === null) {
                setTasks({});
            }
            if (snapshot.val() !== null) {
                setTasks({ ...snapshot.val() });
            }
        });
    }, []);

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                user,
                setUser,
                auth,
                setAuth,
                tasks,
                setTasks,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
