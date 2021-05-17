import React from 'react';

import { Styled } from './styled';

interface Props {
  className: string;
  title?: string;
  modalRef: React.RefObject<HTMLDivElement>;
}

export const ModalContent: React.FC<Props> = ({
  children,
  className,
  title,
  modalRef,
}) => {
  return (
    <Styled.ModalContainer>
      <Styled.Modal className={`${className} modal`} ref={modalRef}>
        {title && <Styled.ModalHeader>{title}</Styled.ModalHeader>}
        <Styled.ModalContent>{children}</Styled.ModalContent>
      </Styled.Modal>
    </Styled.ModalContainer>
  );
};
