import React, { useState } from 'react';
import { Styled } from './styled';
import { Actions } from './Actions';
import { useParams } from 'react-router-dom';
import { Params } from './interfaces';
import { store } from '../store';
import { AddFileModal } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { sendFiles } from '../helpers';
import { observer } from 'mobx-react-lite';

interface Props {
  updateUser: () => Promise<void>;
}

export const ProfileMain = observer(({ updateUser }: Props) => {
  const { id } = useParams<Params>();

  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);

  const addPhotoModalHandler: React.MouseEventHandler = () => {
    setShowAddPhotoModal(!showAddPhotoModal);
  };

  const isFriend = () => {
    return !!store.user.friends.find((friend) => friend._id === id);
  };

  return (
    <>
      <Styled.ProfileMain>
        <Styled.ProfilePhoto src={store.profile.avatar.name} />
        <Actions
          addPhotoModalHandler={addPhotoModalHandler}
          isOwner={store.user?._id === id}
          isFriend={isFriend()}
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
          updateAction={updateUser}
        />
      )}
    </>
  );
});
