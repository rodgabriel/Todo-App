import styled from "styled-components";

export const Container = styled.main`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 40px;
`;

export const Category = styled.div`
    flex: 1;
    min-height: 90vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 40px 60px 20px;

    border-radius: 12px;

    transition: 0.3s all ease;
`;

export const CategoryTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 18px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    width: 100%;
    min-height: 110px;

    background: #fff;
    box-shadow: 0px 0px 22px -10px rgba(0, 0, 0, 0.15);

    border-radius: 12px;

    margin: 12px 0;
    padding: 20px 30px;

    user-select: none;

    transition: 0.3s all ease;
`;

export const Content = styled.div`
    flex: 1;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const CardTitle = styled.div`
    flex: 1;

    width: 100%;
    height: auto;

    font-size: 16px;
    font-weight: 600;

    margin-bottom: 12px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > i {
        margin-right: 12px;
        filter: opacity(40%);
        cursor: pointer;

        font-size: 24px;

        transition: all 0.2s ease;

        &:hover {
            filter: opacity(80%);
        }
    }
`;

export const Urgency = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;

    padding: 4px 20px;
    margin-bottom: 16px;

    border-radius: 12px;
    background: ${(props) => (props.urgency === "urgent" ? "#9f00ff" : "#FFA800")};
    color: #fff;

    font-size: 12px;
    text-transform: capitalize;
`;

export const Date = styled.div`
    width: 90px;
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 12px;
    color: #678797;

    > i {
        font-size: 16px;
    }
`;

export const Buttons = styled.div`
    font-size: 24px;
`;

export const DoneButton = styled.div`
    margin-bottom: 12px;

    color: #00dca3;

    opacity: 0.35;

    cursor: pointer;
    transition: 0.2s all ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const DeleteButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #ff005f;

    opacity: 0.35;

    cursor: pointer;
    transition: 0.2s all ease;

    &:hover {
        opacity: 0.8;
    }
`;
