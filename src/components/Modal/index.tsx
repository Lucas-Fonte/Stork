import React from 'react';
import { Container } from './styles';

interface Modal {
  data: string;
  showing: boolean;
}

type ModalProps = JSX.IntrinsicElements['div'] & Modal;

const Modal: React.FC<ModalProps> = ({ showing, data, ...rest }) => {
  const showingDisplay = showing ? 'block' : 'none';

  console.log(data);
  return (
    <Container>
      <div style={{ display: showingDisplay }} {...rest}>
        <pre>
          <code>{ data }</code>
        </pre>
      </div>
    </Container>
  );
};


export { Modal };
