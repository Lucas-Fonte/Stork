import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
      background: #3FD6B1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 14px;
      font-size: 16px;
      transition: background 0.5s;
      &:hover {
        color: #666;
        background: ${darken(0.05, '#F6D741')};
      }
`;
