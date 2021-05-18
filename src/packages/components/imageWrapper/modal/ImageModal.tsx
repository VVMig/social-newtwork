import React from 'react';

import { Modal } from '../../modal';
import { ImageModalProps } from '../interfaces';
import { Styled } from '../styled';
import { Actions } from './Actions';
import { ImageInfo } from './ImageInfo';

export const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  setAvatarAction,
  deleteHandler,
  showModal,
  setShowModal,
  ...props
}) => {
  const showImageInfo = !Object.values({ ...props }).includes(undefined);
  const showActions = !!setAvatarAction && !!deleteHandler;

  return (
    <Modal setShowModal={setShowModal} showModal={showModal}>
      <Styled.Image src={src} alt={alt} />
      {showImageInfo && <ImageInfo {...props} />}

      {showActions && (
        <Actions
          setAvatarAction={setAvatarAction}
          deleteHandler={deleteHandler}
        />
      )}
    </Modal>
  );
};
