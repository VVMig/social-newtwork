import styled from 'styled-components';
import { ImageWrapper } from '../../packages/components';

const imageSize = 300;
const leftContentPadding = 50;

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 750px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.mainBackground};
`;

const ProfilePhoto = styled(ImageWrapper)`
  height: ${imageSize}px;
  width: ${imageSize}px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 ${leftContentPadding}px;
`;

const LeftContent = styled(RightContent)`
  padding: 0;
`;

const InfoHeader = styled.div`
  padding-bottom: 20px;
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

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) => props.theme.additionalLightGrey};
`;

const StatisticHeader = styled.h3`
  font-size: 22px;
  color: ${(props) => props.theme.additionalDarkGrey};
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

export const Styled = {
  Profile,
  ProfilePhoto,
  RightContent,
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
  LeftContent,
};
