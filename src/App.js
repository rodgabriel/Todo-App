import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./globalStyles";

// components
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
