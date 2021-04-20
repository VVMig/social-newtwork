import React from 'react';
import { Modal, ModalProps } from '../modal';
import { Styled } from './styled';
import { Likes } from '../likes';

interface Props extends ModalProps {
  likesNumber?: number;
  src: string;
  alt?: string;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
}

export const ImageModal = ({
  likesNumber,
  src,
  alt,
  likeIcon,
  isLiked,
  ...props
}: Props) => {
  return (
    <>
      <Modal {...props}>
        <Styled.Image src={src} alt={alt} />
        <Styled.LikesContainer>
          {likesNumber && likeIcon && (
            <Likes
              likesNumber={likesNumber}
              icon={likeIcon}
              isLiked={isLiked}
            />
          )}
        </Styled.LikesContainer>
      </Modal>
    </>
  );
};
