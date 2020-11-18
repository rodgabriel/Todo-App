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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    min-height: 120px;

    background: #fff;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.25);

    border-radius: 12px;

    margin: 12px 0;
    padding: 20px 30px;
`;

export const CardTitle = styled.div`
    flex: 1;

    width: 100%;
    height: auto;

    font-size: 16px;
    font-weight: 600;

    margin-bottom: 12px;

    > i {
        margin-right: 12px;
    }
`;

export const Urgency = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;

    padding: 4px 20px;
    margin-bottom: 12px;

    border-radius: 12px;
    background: ${(props) => (props.urgency === "urgent" ? "#9F46E4" : "#FFA800")};
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

    > i {
        font-size: 16px;
    }
`;
