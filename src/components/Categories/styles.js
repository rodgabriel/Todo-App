import styled from "styled-components";

export const Category = styled.div`
    flex: 1;
    min-height: 72vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 10px 10px;
    margin: 10px 10px;

    border-radius: 12px 12px 0 0;

    transition: 0.3s all ease;

    @media (max-width: 760px) {
        min-height: auto;
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: 100%;

    padding: 0 20px;

    font-size: 20px;

    .category-header-title {
        font-size: 20px;
        font-weight: 600;
    }

    .category-header-btn {
        cursor: pointer;
        transition: 0.3s all ease;

        color: #13131366;

        width: 30px;
        height: 30px;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 9999;

        &:hover {
            color: #131313;
        }

        &.closeNew {
            transform: translate(5px, 55px) rotate(45deg);
            color: white;
            background: #e15f41;

            &:hover {
                background: #ff3f31;
            }
        }
    }
`;
