import { Navbar, Logo, UserPanel } from "./styles";

// user context
import { useUser } from "../../context/UserContext";

export default function Index() {
    const { auth, signed, setSigned, user } = useUser();

    const onSignOutClick = () => {
        auth.signOut();
        setSigned(auth.isSignedIn.get());
    };

    return (
        <Navbar>
            {signed && (
                <>
                    <Logo>TASKS.DO</Logo>
                    <UserPanel>
                        <img src={user.img} alt="avatar"></img>
                        <h2>{user.name}</h2>
                        <button onClick={onSignOutClick}>Sign Out</button>
                    </UserPanel>
                </>
            )}
        </Navbar>
    );
}
