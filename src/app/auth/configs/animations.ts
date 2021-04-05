import { keyframes } from 'styled-components';

export const cornerWidth = 400;

export const additionalWidthForSwitch = 100;

export const appearRight = keyframes`
  0%{
    right: -100%;
  }
  40%{
    right: -90%;
  }
  70%{
    right: -60%;
  }
  90%{
    right: 0;
  }
`;

export const appearLeft = keyframes`
  0%{
    left: -100%;
  }
  40%{
    left: -90%;
  }
  70%{
    left: -60%;
  }
  90%{
    left: 0;
  }
`;

export const disappearLeft = keyframes`
  0%{
    left: 0;
  }
  40%{
    left: -20%;
  }
  60%{
    left: -70%;
  }
  100%{
    left: -100%;
  }
`;

export const disappearRight = keyframes`
  0%{
    right: 0;
  }
  40%{
    right: -20%;
  }
  60%{
    right: -70%;
  }
  100%{
    right: -100%;
  }
`;

export const switchToRight = keyframes`
  0%{
    left: 0;
    transform: translateX(0);
    width: ${cornerWidth}px;
    border-radius: 10px 0 0 10px;
    background-position: 30% 50%;

  }
  30%{
    transform: translateX(0);
    left: 0;
  }
  50%{
    width: ${cornerWidth + additionalWidthForSwitch}px;
  }
  100%{
    width: ${cornerWidth}px;
    left: 100%;
    transform: translateX(-100%);
    border-radius: 0 10px 10px;
    background-position: 100% 50%;

  }
`;

export const switchToLeft = keyframes`
  0%{
    left: 100%;
    transform: translateX(-100%);
    width: ${cornerWidth}px;
    border-radius: 0 10px 10px;
    background-position: 100% 50%;

  }
  30%{
    transform: translateX(-100%);
    left: 100%;
  }
  50%{
    width: ${cornerWidth + additionalWidthForSwitch}px;
  }
  100%{
    width: ${cornerWidth}px;
    left: 0;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;
    background-position: 30% 50%;

  }
`;

export const switchToLeftForm = keyframes`
  0%{
    left: 100%;
    transform: translateX(-100%);
    border-radius: 0 10px 10px 0;

  }
  100%{
    left: 0;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;
  }
`;

export const switchToRightForm = keyframes`
  0%{
    left: 0;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;

  }
  100%{
    left: 100%;
    transform: translateX(-100%);
    border-radius: 0 10px 10px 0;

  }
`;
