import React, { useState } from 'react';

import { ImageModal } from './ImageModal';
import { ImageProps } from './interfaces';
import { Styled } from './styled';

export const ImageWrapper = ({
  actionHandler,
  isModal,
  className,
  alt,
  src,
  setAvatarAction,
  selectMode,
  setSelected,
  selected,
  ...props
}: ImageProps) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const modalHandler: React.MouseEventHandler = () => {
    setShowImageModal(!showImageModal);
  };

  const clickHandler: React.MouseEventHandler = (event) => {
    if (!selectMode) {
      isModal && modalHandler(event);
      actionHandler && actionHandler(event);
    } else setSelected && setSelected(!selected);
  };

  return (
    <>
      <Styled.Preview
        src={src}
        alt={alt}
        className={className}
        onClick={clickHandler}
        isModal={isModal}
        selected={selected}
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
