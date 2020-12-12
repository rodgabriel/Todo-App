import { useHistory } from "react-router-dom";

import { Navbar, Logo, UserPanel } from "./styles";

// user context
import { useUser } from "../../context/UserContext";

// logo svg
import logoSvg from "../../assets/logo.svg";

export default function Index() {
    const history = useHistory();
    const { auth, signed, setSigned, user } = useUser();

    const onSignOutClick = () => {
        auth.signOut();
        setSigned(auth.isSignedIn.get());
        history.push("/");
    };

    return (
        <Navbar>
            <Logo>
                <img src={logoSvg} alt="Logo" />
                <h1>Taskit</h1>
            </Logo>
            <UserPanel>
                <img src={user.img} alt="avatar"></img>
                <h2>{user.name}</h2>
                <button onClick={onSignOutClick}>Sign Out</button>
            </UserPanel>
        </Navbar>
    );
}
