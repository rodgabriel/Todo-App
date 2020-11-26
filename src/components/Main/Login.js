// user context
import { useUser } from "../../context/UserContext";

export default function Login() {
    const { auth, setSigned, setUser } = useUser();

    const onSignInClick = async () => {
        await auth.signIn();

        setSigned(auth.isSignedIn.get());

        const profile = auth.currentUser.get().getBasicProfile();

        setUser({
            id: profile.getId(),
            name: profile.getName(),
            img: profile.getImageUrl(),
        });
    };

    return (
        <div>
            <button onClick={onSignInClick}>Sign in with Google</button>
        </div>
    );
}
