import React, { useState } from 'react';
import { Styled } from './styled';
import { ImageModal } from './ImageModal';
import { ImageProps } from './interfaces';

export const ImageWrapper = ({
  actionHandler,
  isModal,
  className,
  alt,
  src,
  setAvatarAction,
  ...props
}: ImageProps) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const modalHandler: React.MouseEventHandler = () => {
    setShowImageModal(!showImageModal);
  };

  const clickHandler: React.MouseEventHandler = (event) => {
    isModal && modalHandler(event);
    actionHandler && actionHandler(event);
  };

  return (
    <>
      <Styled.Preview
        src={src}
        alt={alt}
        className={className}
        onClick={clickHandler}
        isModal={isModal}
      ></Styled.Preview>
      <ImageModal
        showModal={showImageModal}
        setShowModal={setShowImageModal}
        src={src}
        alt={alt}
        setAvatarAction={setAvatarAction}
        {...props}
      />
    </>
  );
};
