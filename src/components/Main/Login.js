// user context
import { useUser } from "../../context/UserContext";

// styled components
import { Container, SignInCard } from "./loginStyles";

// image
import heroImg from "../../assets/tasks_hero.png";

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
        <Container>
            <SignInCard>
                <div className="greeting">
                    <h4>Welcome to</h4>
                    <h1>TASKS.DO</h1>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="tasks img" />
                </div>
                <div className="signIn-btn">
                    <button onClick={onSignInClick}>Sign in with Google</button>
                </div>
            </SignInCard>
        </Container>
    );
}
