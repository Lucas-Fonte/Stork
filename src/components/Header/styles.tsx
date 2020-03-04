import styled, { keyframes, css } from 'styled-components';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity: boolean;
}

const fade = keyframes`
    from {
        opacity: 0.5;
        transform: rotate(45deg);
    }
    to {
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 10px;
    
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
    }

`;

export const HeaderMenu = styled.div`
    position: fixed;
    right: 7vw;
    padding: 3px;
    height: 35px;
    border-radius: 10px;

`;

export const IconContainer = styled.div.attrs((props: MenuItemProps, ...rest) => ({
  opacity: props.opacity,
  ...rest,
}))`
    cursor: pointer;
    ${(props: MenuItemProps) => 
    props.opacity 
      && css`
          svg {
              animation: ${fade} 0.3s linear;
          }
    `}

`;

