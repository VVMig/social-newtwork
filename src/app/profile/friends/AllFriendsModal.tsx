import React from 'react';
import { FriendFields, Modal, ModalProps } from '../../../packages/components';
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
  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      title="All friends"
    >
      <Styled.AllItemsModal>
        {friends.map((friend, i) => (
          <Friend {...friend} key={i} />
        ))}
      </Styled.AllItemsModal>
    </Modal>
  );
};
