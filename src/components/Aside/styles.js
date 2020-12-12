import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(25%);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background: #fff;
    padding: 30px 40px;

    border-radius: 12px;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.15);

    & > h1 {
        color: orangered;
    }
`;
