import React, { useState } from 'react';

import { ImageProps } from './interfaces';
import { ImageModal } from './modal/ImageModal';
import { Styled } from './styled';

export const ImageWrapper: React.FC<ImageProps> = ({
  actionHandler,
  isModal,
  className,
  alt,
  src,
  setAvatarAction,
  isSelectMode,
  setSelected,
  isSelected,
  ...props
}) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const modalHandler: React.MouseEventHandler = () => {
    setShowImageModal(!showImageModal);
  };

  const clickHandler: React.MouseEventHandler = (event) => {
    if (!isSelectMode) {
      isModal && modalHandler(event);
      actionHandler && actionHandler(event);
    } else setSelected && setSelected(!isSelected);
  };

  return (
    <>
      <Styled.Preview
        src={src}
        className={className}
        onClick={clickHandler}
        isModal={isModal}
        isSelected={isSelected}
      />
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
