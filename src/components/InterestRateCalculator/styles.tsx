import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 80%;
    color: #fff;

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        @media only screen and (max-width: 600px) {
            margin-top: 50px;
        }
    }

    button {
        margin-top: 10px;
    }
`;
