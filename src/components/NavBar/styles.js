import styled from "styled-components";

export const Navbar = styled.div`
    height: 12vh;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    background: transparent;
`;

export const Logo = styled.div`
    font-family: "Permanent Marker", cursive;
    font-size: 36px;
    letter-spacing: 6px;
`;

export const UserPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 24px;
    }

    > h2 {
        margin-right: 24px;
    }

    > button {
        padding: 12px 24px;
        font-weight: bold;
        color: #de5246;
        background: transparent;
        border: 1px solid #de524633;
        border-radius: 12px;
        cursor: pointer;
    }
`;
