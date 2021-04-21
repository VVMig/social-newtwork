import React from 'react';
import { ImageProps, Modal, ModalProps } from '../../../packages/components';
import { Styled } from '../styled';

interface Props extends ModalProps {
  photos: ImageProps[];
}

export const AllPhotoModal = ({ showModal, setShowModal, photos }: Props) => {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="All photos">
      <Styled.AllItemsModal>
        {photos.map((photo, i) => (
          <Styled.Photo {...photo} key={i} />
        ))}
      </Styled.AllItemsModal>
    </Modal>
  );
};
