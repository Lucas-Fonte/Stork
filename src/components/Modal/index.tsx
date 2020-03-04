/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Container, UnloadContainer } from './styles';

interface Modal {
  data: any;
  showing: boolean;
}


type ModalProps = JSX.IntrinsicElements['div'] & Modal;

const Modal: React.FC<ModalProps> = ({ showing, data }) => {
  const [showingModal, setShowingModal] = useState(showing ? 1 : 0);
  const [unShowingModal, setUnshowingModal] = useState(1);
  if (data === undefined) {
    return null;
  }

  const thisData = JSON.parse(data);

  const handleClose = () => {
    setShowingModal(0);
    setUnshowingModal(0);
  };

  return (
    <UnloadContainer opacity={unShowingModal}>
      <Container>
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
        <FaChevronDown onClick={() => handleClose()} />
      </Container>
    </UnloadContainer>
  );
};


export { Modal };
