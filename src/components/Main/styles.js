import styled from "styled-components";

export const Wrapper = styled.main`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 40px;
`;

export const TasksContainer = styled.div`
    flex: 7;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    background: #fff;
    padding: 30px 20px 0;

    border-radius: 12px;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.15);
`;

export const Category = styled.div`
    flex: 1;
    min-height: 75vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 10px;

    border-radius: 12px 12px 0 0;

    transition: 0.3s all ease;
`;

export const CategoryTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 18px;
    margin-left: 10px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    width: 100%;
    min-height: 110px;

    background: #eff3f466;
    //box-shadow: 0px 0px 22px -10px rgba(0, 0, 0, 0.15);

    border: 1px solid #b3b5ff33;
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

export const Aside = styled.aside`
    flex: 1;

    background: #fff;

    border-radius: 12px;
    margin-left: 36px;

    padding: 2.5% 4%;

    text-align: center;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.15);

    > .text {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        font-size: 18px;

        margin-top: 12px;

        > .number {
            height: 100%;

            display: flex;
            justify-content: flex-end;

            font-size: 64px;
            font-weight: bold;

            margin-right: 8px;
            color: #ff3e00;
        }

        > .un {
            align-self: center;
            text-align: left;
            height: 100%;
        }
    }

    @media (max-width: 1024px) {
        flex: 0.1;
    }

    @media (max-width: 960px) {
        display: none;
    }
`;
