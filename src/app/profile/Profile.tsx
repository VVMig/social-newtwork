import React, { useEffect, useState } from 'react';
import { Styled } from './styled';
import { ProfileMain } from './ProfileMain';
import { ProfileInfo } from './ProfileInfo';
import { parseStats } from '../helpers/parseStats';
import { Params, ProfileUser } from './interfaces';
import { getProfile, parseError } from '../helpers';
import { useParams } from 'react-router';
import { Spinner } from '../../packages/components';
import { parsePhotos } from '../helpers/parsePhotos';

export const Profile = () => {
  const [profileUser, setProfileUser] = useState<ProfileUser>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams<Params>();

  const getProfileUser = async () => {
    try {
      const data = await getProfile(id);

      setProfileUser(data);
    } catch (error) {
      setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileUser();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Styled.Profile>
          {profileUser ? (
            <>
              <ProfileMain
                updateUser={getProfileUser}
                profilePhoto={parsePhotos(profileUser.photos)[0]}
              />
              <ProfileInfo
                stats={parseStats(profileUser)}
                photos={parsePhotos(profileUser.photos)}
                name={`${profileUser.firstName} ${profileUser.lastName}`}
              />
            </>
          ) : (
            error
          )}
        </Styled.Profile>
      )}
    </>
  );
};
