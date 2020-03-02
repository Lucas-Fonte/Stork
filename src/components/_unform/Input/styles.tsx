import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1px;

    input {
      background: rgba(255, 255, 255, 0.1);
      width: 250px;
      height: 50px;
      border: 0;
      border-radius: 5px;
      padding: 6px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    label {
        font-weight: bold;
        font-size: 12px;
        margin-bottom: 2px;
    }
`;
