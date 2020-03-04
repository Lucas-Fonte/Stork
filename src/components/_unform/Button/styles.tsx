import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  isLoading: boolean;
}

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Button = styled.button.attrs((props: ButtonProps, ...rest) => ({
  disabled: props.isLoading,
  ...rest,
}))`
    
      background: #3FD6B1;
      font-weight: bold;
      width: 80px;
      height: 50px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.5s;
      &:hover {
        background: ${darken(0.05, '#3cd1e8')};
      }

      ${(props: ButtonProps) => props.isLoading
            && css`
                svg {
                    animation: ${rotate} 2s linear infinite;
                }
            `}
`;
