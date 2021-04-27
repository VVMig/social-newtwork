import { Dispatch } from 'react';

export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  delay?: number;
  closeIcon?: JSX.Element;
  title?: string;
}
