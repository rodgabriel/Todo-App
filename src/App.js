import GlobalStyle from "./globalStyles";

// context
import { TasksProvider } from "./context/TasksContext";

// components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
    return (
        <>
            <TasksProvider>
                <GlobalStyle />
                <NavBar />
                <Main />
            </TasksProvider>
        </>
    );
}

export default App;
