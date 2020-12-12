import styled from "styled-components";

export const Navbar = styled.header`
    height: 10vh;
    min-height: 60px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    background: #fff;

    box-shadow: 0 0 30px -15px #0000001f;
`;

export const Logo = styled.div`
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #316cff;

    > img {
        width: 40px;
        margin-right: 24px;
    }
`;

export const UserPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 24px;
    }

    > h2 {
        margin-right: 24px;
        font-size: 16px;
    }

    > button {
        padding: 8px 0 8px 16px;
        font-weight: bold;
        color: #de5246;
        background: transparent;
        border: none;
        border-left: 2px solid #de524633;
        cursor: pointer;

        transition: all 0.2s ease;

        &:hover {
            filter: saturate(150%);
            border-left: 2px solid #de5246;
        }
    }

    @media (max-width: 520px) {
        > h2 {
            display: none;
        }
    }
`;
