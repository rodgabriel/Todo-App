// user context
import { useUser } from "../../context/UserContext";

// compenents
import Content from "./Content";
import Login from "./Login";

export default function Index() {
    const { signed } = useUser();

    return signed ? <Content /> : <Login />;
}
