import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 40px;
`;

export const SignInCard = styled.div`
    width: 500px;
    height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 40px;

    background: #778beb;

    border-radius: 24px;

    box-shadow: 0px 0px 30px -10px rgba(0, 21, 115, 0.5);

    > .greeting {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: #fff;

        > h4 {
            text-transform: uppercase;
            opacity: 60%;
        }

        > h1 {
            font-size: 48px;
            letter-spacing: 12px;
        }
    }

    > .hero-img {
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            width: 100%;
        }
    }

    > .signIn-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        > button {
            padding: 16px 48px;

            font-size: 14px;
            font-weight: bold;
            color: #546de5;

            background: #fff;
            border: none;
            border-radius: 12px;

            cursor: pointer;

            transition: all 0.3s ease;

            &:hover {
                color: #fff;

                background: #db4437;
            }
        }
    }
`;
