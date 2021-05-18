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
  selectMode,
  setSelected,
  selected,
  ...props
}) => {
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
        className={className}
        onClick={clickHandler}
        isModal={isModal}
        isSelected={selected}
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
