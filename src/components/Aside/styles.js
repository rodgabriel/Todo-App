import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    padding: 30px 40px;

    &:not(:last-child) {
        margin-bottom: 36px;
    }

    border-radius: 12px;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.15);

    text-align: center;

    & > h1 {
        font-size: 40px;
        color: #333;
        text-transform: capitalize;

        > strong {
            font-size: 56px;
            color: orangered;
        }
    }

    & > h2 {
        font-size: 18px;
        font-weight: normal;
    }

    & > p {
        font-size: 22px;
        font-weight: normal;
        font-style: italic;

        @media (max-width: 1160px) {
            font-size: 18px;
        }
    }

    & > small {
        font-size: 18px;
    }
`;
