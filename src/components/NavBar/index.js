import { Navbar } from "./styles";

// user context
import { useUser } from "../../context/UserContext";

export default function Index() {
    const { auth, signed, setSigned, setUser } = useUser();

    const onSignOutClick = () => {
        auth.signOut();
        setSigned(auth.isSignedIn.get());
    };
    return (
        <Navbar>
            <div>LOGO</div>
            {signed && <button onClick={onSignOutClick}>Sign Out</button>}
        </Navbar>
    );
}
