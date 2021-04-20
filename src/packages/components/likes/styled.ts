import styled from 'styled-components';

const iconSize = 22;

interface Liked {
  isLiked?: boolean;
}

const LikeIcon = styled.div<Liked>`
  transition: 0.2s linear;

  color: ${(props) =>
    !props.isLiked ? props.theme.additionalDarkGrey : props.theme.mainRed};

  & div {
    display: flex;
    align-items: center;
  }

  & svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }
`;

const Likes = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;

  &:hover ${LikeIcon} {
    opacity: 0.8;
  }
`;

const Amount = styled.span`
  color: ${(props) => props.theme.additionalDarkGrey};
  font-size: 16px;
`;

export const Styled = {
  Likes,
  Amount,
  LikeIcon,
};
