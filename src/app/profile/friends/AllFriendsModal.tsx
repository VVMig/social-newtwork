import React from 'react';
import { Modal, ModalProps } from '../../../packages/components';
import { FriendFields } from '../interfaces';
import { Styled } from '../styled';
import { Friend } from './Friend';

interface Props extends ModalProps {
  friends: FriendFields[];
}

export const AllFriendsModal = ({
  showModal,
  setShowModal,
  friends,
}: Props) => {
  const closeModal: React.MouseEventHandler = () => {
    setShowModal(false);
  };

  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      title="All friends"
    >
      <Styled.AllItemsModal>
        {friends.map((friend, i) => (
          <Friend {...friend} key={i} closeModal={closeModal} />
        ))}
      </Styled.AllItemsModal>
    </Modal>
  );
};
