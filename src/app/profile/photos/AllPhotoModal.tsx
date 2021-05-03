import React, { useEffect, useState } from 'react';
import {
  Button,
  ImageProps,
  Modal,
  ModalProps,
} from '../../../packages/components';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { Styled } from '../styled';

interface Props extends ModalProps {
  photos: ImageProps[];
  avatarHandler?: React.MouseEventHandler<Element>;
  deletePhotos?: (photos: ImageProps[] | string) => Promise<void>;
}

export const AllPhotoModal = ({
  showModal,
  setShowModal,
  photos,
  avatarHandler,
  deletePhotos,
}: Props) => {
  const [selectMode, setSelectMode] = useState(false);
  const [allPhotos, setAllPhotos] = useState(
    photos.map((photo) => ({
      ...photo,
      selected: false,
    }))
  );

  const selectToggle: React.MouseEventHandler = () => {
    setSelectMode(!selectMode);
  };

  function selectPhotoToggle(this: ImageProps, selected: boolean) {
    setAllPhotos(
      allPhotos.map((photo) =>
        photo.src === this.src ? { ...photo, selected } : photo
      )
    );
  }

  const isItemsSelected = () => {
    return !!allPhotos.find((photo) => photo.selected);
  };

  function trashClickHandler(this: ImageProps) {
    if (!deletePhotos) return;
    if (this) {
      deletePhotos(`${/(?!.*\/).*/.exec(this.src)?.shift()}`);
    } else deletePhotos(allPhotos.filter((photo) => photo.selected));
  }

  const selectAll: React.MouseEventHandler = () => {
    setAllPhotos(photos.map((photo) => ({ ...photo, selected: true })));
  };

  useEffect(() => {
    setAllPhotos(photos.map((photo) => ({ ...photo, selected: false })));
    setAllPhotos(
      photos.map((photo) => ({
        ...photo,
        selected: false,
      }))
    );
    photos.length === 0 && setShowModal(false);
  }, [photos]);

  useEffect(() => {
    if (!selectMode)
      setAllPhotos(photos.map((photo) => ({ ...photo, selected: false })));
  }, [selectMode]);

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="All photos">
      {deletePhotos && (
        <Styled.ActionsModal>
          {selectMode && isItemsSelected() && (
            <>
              <div onClick={trashClickHandler}>
                <Icon type={IconType.Trash} title="Delete" />
              </div>
            </>
          )}
          {selectMode && <Button onClick={selectAll}>Select all</Button>}
          <Button onClick={selectToggle}>
            {selectMode ? 'Cancel' : 'Select'}
          </Button>
        </Styled.ActionsModal>
      )}
      <Styled.AllItemsModal>
        {allPhotos.map((photo, i) => (
          <Styled.Photo
            {...photo}
            selectMode={selectMode}
            key={i}
            setAvatarAction={avatarHandler?.bind(photo)}
            setSelected={selectPhotoToggle.bind(photo)}
            deleteHandler={trashClickHandler.bind(photo)}
          />
        ))}
      </Styled.AllItemsModal>
    </Modal>
  );
};
