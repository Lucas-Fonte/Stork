import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
      background: #3FD6B1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 10px;
      font-size: 10px;
      transition: background 0.2s;
      &:hover {
        color: #666;
        background: ${darken(0.05, '#F6D741')};
      }
`;
