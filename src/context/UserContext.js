import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserContextProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({ name: "", img: "", id: "" });
    const [auth, setAuth] = useState();

    useEffect(() => {
        window.gapi.load("client:auth2", async () => {
            await window.gapi.client.init({
                clientId:
                    "136405787613-mcceo4l6g8j8mds64ui0cld2mi5mjl08.apps.googleusercontent.com",
                scope: "email",
            });

            setAuth(window.gapi.auth2.getAuthInstance());
        });
    }, []);

    useEffect(() => {
        auth && setSigned(auth.isSignedIn.get());
    }, [auth]);

    return (
        <UserContext.Provider
            value={{ signed, setSigned, user, setUser, auth, setAuth }}
        >
            {children}
        </UserContext.Provider>
    );
}
