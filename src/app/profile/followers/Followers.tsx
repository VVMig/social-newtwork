import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { store } from '../../store';
import { ListSection } from '../ListSection';
import { AllFollowersModal } from './AllFollowersModal';
import { FollowersSwiper } from './FollowersSwiper';

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
