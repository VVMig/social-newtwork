import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { AddFileModal, ImageProps } from '../../packages/components';
import {
  follow,
  isLiked,
  likeToggle,
  parseError,
  sendFiles,
  unfollow,
} from '../helpers';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { store } from '../store';
import { Actions } from './Actions';
import { Params } from './interfaces';
import { Styled } from './styled';

export const ProfileMain = observer(() => {
  const { id } = useParams<Params>();

  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);

  const addPhotoModalHandler: React.MouseEventHandler = () => {
    setShowAddPhotoModal(!showAddPhotoModal);
  };

  const isFollowing = () => {
    return !!store.user.following.find((following) => following._id === id);
  };

  async function toggleLikeHandler(this: ImageProps) {
    try {
      await likeToggle(`${/(?!.*\/).*/.exec(this.src)?.shift()}`);
    } catch (error) {
      store.setError(parseError(error));
    }
  }

  const subscribeHandler: React.MouseEventHandler = async () => {
    try {
      if (isFollowing()) {
        await unfollow(id);
      } else await follow(id);
    } catch (error) {
      store.setError(parseError(error));
    }
  };

  const sendPhotos = async (files: Blob[]) => {
    await sendFiles(files);
  };

  const handleError = (error: AxiosError) => {
    store.setError(parseError(error));
  };

  return (
    <>
      <Styled.ProfileMain>
        {store.profile.avatar ? (
          <Styled.ProfilePhoto
            {...store.profile.profileAvatar}
            isLiked={isLiked(store.user._id, store.profile.profileAvatar.src)}
            likeIcon={<Icon type={IconType.Like} />}
            likeHandler={toggleLikeHandler.bind(store.profile.profileAvatar)}
          />
        ) : (
          <Styled.EmptyAvatar name={store.profile.firstName} />
        )}
        {store.isUserSet && store.user.verified && (
          <Actions
            addPhotoModalHandler={addPhotoModalHandler}
            isOwner={store.user?._id === id}
            isFollowing={isFollowing()}
            subscribeHandler={subscribeHandler}
            id={id}
          />
        )}
      </Styled.ProfileMain>
      {showAddPhotoModal && (
        <AddFileModal
          uploadIcon={<Icon type={IconType.Upload} />}
          setShowModal={setShowAddPhotoModal}
          showModal={showAddPhotoModal}
          sendFiles={sendPhotos}
          successIcon={<Icon type={IconType.Done} />}
          failedIcon={<Icon type={IconType.Error} />}
          showError={handleError}
        />
      )}
    </>
  );
});
