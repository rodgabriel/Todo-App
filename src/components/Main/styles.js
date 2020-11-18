import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 40px;

    > div {
        flex: 1;
        border: 1px red solid;
    }
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 40px;

    > div {
        width: 100%;
        border: green 1px solid;
        margin: 12px 0;
    }
`;
