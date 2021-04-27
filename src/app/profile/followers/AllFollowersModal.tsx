import React from 'react';
import { Modal, ModalProps } from '../../../packages/components';
import { FollowerFields } from '../interfaces';
import { Styled } from '../styled';
import { Follower } from './Follower';

interface Props extends ModalProps {
  followers: FollowerFields[];
}

export const AllFollowersModal = ({
  showModal,
  setShowModal,
  followers,
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
        {followers.map((follower, i) => (
          <Follower {...follower} key={i} closeModal={closeModal} />
        ))}
      </Styled.AllItemsModal>
    </Modal>
  );
};
