import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Avatar, ImageWrapper } from '../../packages/components';

const imageSize = 300;
const ProfileMainPadding = 20;

interface StatisticBorder {
  border?: boolean;
}

const Profile = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.mainBackground};
`;

const ProfilePhoto = styled(ImageWrapper)`
  height: ${imageSize}px;
  width: ${imageSize}px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 ${ProfileMainPadding}px;
  width: 100%;
  overflow: hidden;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
`;

const ProfileMain = styled(ProfileInfo)`
  padding: 0;
  max-width: 300px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Name = styled.h2`
  font-size: 24px;
`;

const Status = styled.h2`
  font-size: 22px;
  color: ${(props) => props.theme.blue};
`;

const InfoStatistic = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  width: min-content;
`;

const Statistic = styled.div<StatisticBorder>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) => props.theme.additionalLightGrey};
  border-right: 2px solid ${(props) => props.theme.greyMain};

  ${(props) =>
    !props.border &&
    css`
      border: 0;
    `}
`;

const StatisticHeader = styled.h3`
  font-size: 22px;
  color: ${(props) => props.theme.additionalDarkGrey};
  text-transform: capitalize;
`;

const StatisticBody = styled.span`
  padding-top: 10px;
  font-size: 24px;
  color: ${(props) => props.theme.black};
`;

const Actions = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ActionButton = styled.button`
  max-width: 300px;
  height: 60px;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.greyDark};
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    transition: 0.2s linear;
    opacity: 0.9;
  }

  &:active {
    transition: 0.1s linear;
    transform: scale(0.98);
  }
`;

const ColorActionButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.primary};
  border: 0;
  color: ${(props) => props.theme.light};
`;

const Friend = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: min-content;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

const FriendAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  font-size: 32px;
`;

const FriendFirstName = styled.h3`
  font-size: 16px;
  font-weight: normal;
  padding-top: 5px;
`;

const ListSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .swiper-container {
    width: 100%;
  }

  & .swiper-slide {
    width: auto;
    display: inline-flex;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.additionalLightGrey};
  border-radius: 10px 10px 0 0;
  padding: 8px;
`;

const AllItems = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 2px;
`;

const AllItemsButton = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.greyDark};

  &:hover {
    color: ${(props) => props.theme.additionalDarkGrey};
  }
`;

const Photo = styled(ImageWrapper)`
  height: 70px;
  width: 70px;
  border-radius: 0;
`;

const ActionsModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  padding: 5px 0;

  & button {
    background-color: ${(props) => props.theme.additionalDarkGrey};
    max-width: 80px;
    height: 40px;
    padding: 0;
    font-size: 14px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.danger};
    & svg {
      cursor: pointer;
    }
  }
`;

const AllItemsModal = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 500px;
  height: 100%;

  & ${Photo} {
    width: 300px;
    height: 300px;
  }

  & ${Friend} {
    &:hover ${FriendAvatar} {
      box-shadow: 0 0 0 0.15rem ${(props) => props.theme.darkBlue};
      transition: 0.1s linear box-shadow;
    }
  }

  & ${FriendAvatar} {
    width: 180px;
    height: 180px;
    font-size: 82px;
  }

  & ${FriendFirstName} {
    font-size: 24px;
  }
`;

const PhotoModal = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  & ${Photo} {
    height: 300px;
    width: 250px;
  }
`;

const EmptyAvatar = styled(Avatar)`
  height: ${imageSize}px;
  width: ${imageSize}px;
  border-radius: 10px;
  font-size: 84px;
`;

export const Styled = {
  EmptyAvatar,
  ActionsModal,
  FriendAvatar,
  FriendFirstName,
  Friend,
  PhotoModal,
  AllItemsButton,
  AllItems,
  ListSectionWrapper,
  Profile,
  ProfilePhoto,
  ProfileInfo,
  InfoHeader,
  Name,
  Status,
  InfoStatistic,
  StatisticHeader,
  Statistic,
  StatisticBody,
  Actions,
  ActionButton,
  ColorActionButton,
  ProfileMain,
  Items,
  Photo,
  ProfileInfoWrapper,
  AllItemsModal,
};
