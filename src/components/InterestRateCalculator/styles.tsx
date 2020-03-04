import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 80%;
    color: #fff;
    z-index: 1;

    form {
        max-height: 550px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
    }

    button {
        margin-top: 10px;
    }
`;
