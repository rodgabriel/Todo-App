import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Main = styled.main`
    flex: 1;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 40px;
`;

export const Content = styled.section`
    flex: 7;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    min-height: 82vh;

    background: #fff;
    padding: 30px 20px 0;

    border-radius: 12px;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.15);

    @media (max-width: 760px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Aside = styled.aside`
    flex: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 82vh;
    height: 100%;

    margin-left: 40px;

    border-radius: 12px;
`;

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
`;
