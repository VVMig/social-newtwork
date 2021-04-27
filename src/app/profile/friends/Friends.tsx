import React, { useState } from 'react';
import { ListSection } from '../ListSection';
import { FriendsSwiper } from './FriendsSwiper';
import { AllFriendsModal } from './AllFriendsModal';
import { store } from '../../store';
import { observer } from 'mobx-react-lite';

export const Friends = observer(() => {
  const [showAllFriends, setShowAllFriends] = useState(false);

  const allFriendsHandler: React.MouseEventHandler = () => {
    setShowAllFriends(true);
  };

  return (
    <>
      <ListSection allClickHandler={allFriendsHandler}>
        <FriendsSwiper friends={store.profile.profileFriends} />
      </ListSection>
      {store.profile.friends.length > 0 && (
        <AllFriendsModal
          setShowModal={setShowAllFriends}
          showModal={showAllFriends}
          friends={store.profile.profileFriends}
        />
      )}
    </>
  );
});
