import styled, { keyframes, css } from 'styled-components';

interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity: number;
}

const unload = keyframes`
        0%  {top: -500px;}
        25%  {
          top: 0;
        }
        100% {
          display: none;
          opacity: 0;
        }
`;
const load = keyframes`
      0%  {opacity: 0;}
      25%  {
        opacity: 1;
        top: 0;
      }
      100% {
        top: -500px;
      }
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    left: 0px;
    top: 0px;
    padding: 10px;
    width: 250px;
    height: 450px;
    border-radius: 8px;
    background: #fff;
    z-index: 5;

    li {
      color: #000;
      width: 230px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      color: #bfbfbf;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 125%;
    }
  
`;

export const UnloadContainer = styled.div.attrs((props: ModalContainerProps, ...rest) => ({
  opacity: props.opacity,
  ...rest,
}))`

  ${(props: ModalContainerProps) => (props.opacity === 0
    ? css`
      div {
          animation: ${unload} 0.3s linear forwards;
      }
  ` : css`
      div {
          animation: ${load} 0.3s linear forwards;
      }
  `)} 
`;
