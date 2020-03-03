/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container } from './styles';

interface Modal {
  data: any;
  showing: boolean;
}

type ModalProps = JSX.IntrinsicElements['div'] & Modal;

const Modal: React.FC<ModalProps> = ({ showing, data, ...rest }) => {
  const showingDisplay = showing ? 'block' : 'none';

  if (data === undefined) {
    return null;
  }

  const thisData = JSON.parse(data);

  return (
    <Container>
      <div style={{ display: showingDisplay }} {...rest}>
        <ul>
          { Object.keys(thisData).map((key) => (
            <li key={key}>
              {key}
              {' '}
              :
              {' '}
              {thisData[key]}
            </li>
          ))}
        </ul>

      </div>
    </Container>
  );
};


export { Modal };
