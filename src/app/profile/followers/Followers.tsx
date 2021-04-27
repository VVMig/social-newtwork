import React, { useState } from 'react';
import { ListSection } from '../ListSection';
import { FollowersSwiper } from './FollowersSwiper';
import { AllFollowersModal } from './AllFollowersModal';
import { store } from '../../store';
import { observer } from 'mobx-react-lite';

export const Followers = observer(() => {
  const [showAllFollowers, setShowAllFollowers] = useState(false);

  const allFollowersHandler: React.MouseEventHandler = () => {
    setShowAllFollowers(true);
  };

  return (
    <>
      <ListSection allClickHandler={allFollowersHandler}>
        <FollowersSwiper followers={store.profile.profileFollowers} />
      </ListSection>
      {store.profile.followers.length > 0 && (
        <AllFollowersModal
          setShowModal={setShowAllFollowers}
          showModal={showAllFollowers}
          followers={store.profile.profileFollowers}
        />
      )}
    </>
  );
});
