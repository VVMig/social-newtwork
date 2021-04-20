import styled, { css } from 'styled-components';
import { ImageWrapper } from '../../packages/components';

const imageSize = 300;
const ProfileMainPadding = 20;

interface StatisticBorder {
  border?: boolean;
}

const Profile = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.mainBackground};
`;

const ProfilePhoto = styled(ImageWrapper)`
  min-height: ${imageSize}px;
  height: 100%;
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
  height: 300px;
`;

const ProfileMain = styled(ProfileInfo)`
  padding: 0;
  max-width: 300px;
`;

const InfoHeader = styled.div`
  padding-top: 10px;
`;

const Name = styled.h1`
  font-size: 24px;
`;

const Status = styled.h2`
  font-weight: normal;
  font-size: 14px;
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

const PhotosWrapper = styled.div`
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

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.additionalLightGrey};
  border-radius: 10px 10px 0 0;
  padding: 8px;
`;

const AllPhotos = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 2px;
`;

const AllPhotosButton = styled.span`
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

const AllPhotosModal = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  height: 100%;

  & ${Photo} {
    width: 100%;
    max-width: 200px;
    height: 100%;
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

const LikesContainer = styled.div`
  display: flex;
`;

export const Styled = {
  LikesContainer,
  PhotoModal,
  AllPhotosButton,
  AllPhotos,
  PhotosWrapper,
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
  Photos,
  Photo,
  ProfileInfoWrapper,
  AllPhotosModal,
};
