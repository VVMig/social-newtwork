import React, { useState } from 'react';
import { ListSection } from '../ListSection';
import { FriendsSwiper } from './FriendsSwiper';
import { AllFriendsModal } from './AllFriendsModal';
import { friends } from './/../../friends';

export const Friends = () => {
  const [showAllFriends, setShowAllFriends] = useState(false);

  const allFriendsHandler: React.MouseEventHandler = () => {
    setShowAllFriends(true);
  };

  return (
    <>
      <ListSection allClickHandler={allFriendsHandler}>
        <FriendsSwiper friends={friends} />
      </ListSection>
      <AllFriendsModal
        setShowModal={setShowAllFriends}
        showModal={showAllFriends}
        friends={friends}
      />
    </>
  );
};
