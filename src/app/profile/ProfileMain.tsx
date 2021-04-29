import React, { useState } from 'react';
import { Styled } from './styled';
import { Actions } from './Actions';
import { useParams } from 'react-router-dom';
import { Params } from './interfaces';
import { store } from '../store';
import { AddFileModal } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { follow, sendFiles, unfollow } from '../helpers';
import { observer } from 'mobx-react-lite';

export const ProfileMain = observer(() => {
  const { id } = useParams<Params>();

  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);

  const addPhotoModalHandler: React.MouseEventHandler = () => {
    setShowAddPhotoModal(!showAddPhotoModal);
  };

  const isFollowing = () => {
    return !!store.user.following.find((following) => following._id === id);
  };

  const subscribeHandler: React.MouseEventHandler = async () => {
    try {
      if (isFollowing()) {
        unfollow(id);
      } else follow(id);
    } catch (error) {
      store.profile.setError('asd');
    }
  };

  return (
    <>
      <Styled.ProfileMain>
        {store.profile.avatar.name && (
          <Styled.ProfilePhoto
            {...store.profile.profileAvatar}
            likeIcon={<Icon type={IconType.Like} />}
          />
        )}
        <Actions
          addPhotoModalHandler={addPhotoModalHandler}
          isOwner={store.user?._id === id}
          isFollowing={isFollowing()}
          subscribeHandler={subscribeHandler}
        />
      </Styled.ProfileMain>
      {showAddPhotoModal && (
        <AddFileModal
          uploadIcon={<Icon type={IconType.Upload} />}
          setShowModal={setShowAddPhotoModal}
          showModal={showAddPhotoModal}
          sendFiles={sendFiles}
          successIcon={<Icon type={IconType.Done} />}
          failedIcon={<Icon type={IconType.Error} />}
        />
      )}
    </>
  );
});
