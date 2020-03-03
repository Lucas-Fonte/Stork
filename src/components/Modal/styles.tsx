import styled from 'styled-components';

export const Container = styled.div`
  div {
    padding: 10px;
    width: 250px;
    height: 250px;
    border-radius: 8px;
    background: #fff;

    li {
      color: #000;
      width: 230px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
