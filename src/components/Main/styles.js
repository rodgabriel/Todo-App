import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 40px;
`;

export const Category = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 40px;
`;

export const CategoryTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
`;

export const Card = styled.div`
    width: 100%;
    height: 120px;

    background: #fff;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.25);

    border-radius: 12px;

    margin: 12px 0;
    padding: 20px;
`;
