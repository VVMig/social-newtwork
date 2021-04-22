import React, { useState } from 'react';
import { Styled } from './styled';
import { Actions } from './Actions';
import { ImageProps } from '../../packages/components';
import { useParams } from 'react-router-dom';
import { Params } from './interfaces';
import { store } from '../store';
import { AddFileModal } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { sendFiles } from '../helpers';

interface Props {
  profilePhoto: ImageProps;
  updateUser: () => Promise<void>;
}

export const ProfileMain = ({ profilePhoto, updateUser }: Props) => {
  const { id } = useParams<Params>();

  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);

  const addPhotoModalHandler: React.MouseEventHandler = () => {
    setShowAddPhotoModal(!showAddPhotoModal);
  };

  return (
    <>
      <Styled.ProfileMain>
        <Styled.ProfilePhoto {...profilePhoto} />
        <Actions
          addPhotoModalHandler={addPhotoModalHandler}
          isOwner={store.user?.id === id}
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
};
