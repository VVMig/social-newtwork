import React from 'react';
import { Modal, ModalProps } from '../modal';
import { Styled } from './styled';
import { Likes } from '../likes';
import moment from 'moment';
import { Button } from '../button';

interface Props extends ModalProps {
  likesNumber?: number;
  src: string;
  alt?: string;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
  imageDate?: number;
  setAvatarAction?: React.MouseEventHandler;
  deleteHandler?: React.MouseEventHandler;
  likeHandler?: React.MouseEventHandler;
}

export const ImageModal = ({
  likesNumber,
  src,
  alt,
  likeIcon,
  isLiked,
  imageDate,
  setAvatarAction,
  deleteHandler,
  likeHandler,
  ...props
}: Props) => {
  const realTime = () => {
    return moment(imageDate).fromNow() === 'a few seconds ago'
      ? 'recently'
      : moment(imageDate).fromNow();
  };

  return (
    <>
      <Modal {...props}>
        <Styled.Image src={src} alt={alt} />
        <Styled.InfoContainer>
          {imageDate && <Styled.Date>{realTime()}</Styled.Date>}
          {likesNumber !== undefined && likeIcon && (
            <Likes
              actionHandler={likeHandler}
              likesNumber={likesNumber}
              icon={likeIcon}
              isLiked={isLiked}
            />
          )}
        </Styled.InfoContainer>
        {setAvatarAction && (
          <Styled.Actions>
            <Button onClick={setAvatarAction}>Set as profile image</Button>
            <Styled.Delete onClick={deleteHandler}>
              <Button>Delete</Button>
            </Styled.Delete>
          </Styled.Actions>
        )}
      </Modal>
    </>
  );
};
