import React, { useRef, useState } from 'react';
import { Styled, defaultDelay } from './styled';
import { Transition } from 'react-transition-group';
import { ModalProps } from './interfaces';
import { Portal } from '../portal';
import { ModalContent } from './ModalContent';

export const Modal: React.FC<ModalProps> = ({
  showModal,
  children,
  closeIcon,
  setShowModal,
  delay,
  title,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [buttonLight, setButtonLight] = useState(false);

  const isModalTarget = (event: React.MouseEvent) =>
    event.target === modalRef.current ||
    modalRef.current?.contains(event.target as Node);

  const closeModal: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) setShowModal(false);
    event.stopPropagation();
  };

  const toggleButtonLight: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) setButtonLight(true);
    else setButtonLight(false);
  };

  return (
    <>
      {showModal && (
        <Portal>
          <Styled.ModalWrapper
            onClick={closeModal}
            onMouseOver={toggleButtonLight}
          >
            <Styled.CloseButton colorToggle={buttonLight}>
              {closeIcon || <>&times;</>}
            </Styled.CloseButton>
            <Transition in={showModal} timeout={delay || defaultDelay}>
              {(state) => (
                <ModalContent
                  className={state}
                  title={title}
                  modalRef={modalRef}
                >
                  {children}
                </ModalContent>
              )}
            </Transition>
          </Styled.ModalWrapper>
        </Portal>
      )}
    </>
  );
};
