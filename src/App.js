import { useState, useEffect } from "react";
import fireDb from "./firebase";

// user context
import { useUser } from "./context/UserContext";

import GlobalStyle from "./globalStyles";

// components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
    const {
        auth,
        setAuth,
        signed,
        setSigned,
        user,
        setUser,
        tasks,
        setTasks,
    } = useUser();

    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Main></Main>
        </>
    );
}

export default App;
