import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';
import { zIndex } from '../../packages/components';
import { SwitchState, ResentState, FormikProps } from './interfaces';
import {
  appearLeft,
  appearLeftLinear,
  appearRight,
  appearRightLinear,
  appearTop,
  cornerWidth,
  disappearLeft,
  disappearLeftLinear,
  disappearRight,
  disappearRightLinear,
  switchToLeft,
  switchToLeftForm,
  switchToRight,
  switchToRightForm,
} from './configs/animations';

export const switchVerifyDuration = 400;
const animationDuration = 0.8;
const animationTypeMain = 'ease-in-out';
const animationTypeSecondary = 'linear';

const inputsGap = 50;
const formPaddingTop = 100;

const svgSize = 180;

const centralize = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const AuthContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;

  &.entered {
    left: 0;
  }

  &.entering {
    animation: ${appearLeftLinear} ${switchVerifyDuration}ms linear;
  }

  &.exiting {
    animation: ${disappearLeftLinear} ${switchVerifyDuration}ms linear;
  }
`;

const FormContainer = styled.div<SwitchState>`
  display: flex;
  max-width: calc(100% - ${cornerWidth}px);
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;

  & .spinner {
    ${centralize};
    top: ${inputsGap + formPaddingTop}px;
    transform: translate(-50%, -50%);
  }

  & .alert {
    ${centralize};
    top: 10px;
    background-color: ${(props) => props.theme.additionalBackground};
    animation: ${appearTop} 0.5s linear;
  }

  ${(props) =>
    props.signIn
      ? css`
          left: 100%;
          border-radius: 0 10px 10px 0;
          transform: translateX(-100%);
          animation: ${switchToRightForm} 0.8s ${animationTypeMain};

          & .spinner > div {
            background-color: ${props.theme.primary};
          }
        `
      : css`
          left: 0;
          border-radius: 10px 0 0 10px;
          animation: ${switchToLeftForm} 0.8s ${animationTypeMain};
          & .spinner > div {
            background-color: ${props.theme.lightBlue};
          }
        `}
`;

const FormTitle = styled.div`
  font-size: 24px;
  text-align: center;
  background-color: transparent;
  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Form = styled(FormikForm)<FormikProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${formPaddingTop}px 150px 150px;
  gap: ${inputsGap}px;
  align-items: center;

  ${FormTitle} {
    color: ${(props) =>
      props.signin ? props.theme.primary : props.theme.lightBlue};
  }

  & button {
    margin-top: 10px;
    border: 0;
    background-color: ${(props) =>
      props.signin ? props.theme.primary : props.theme.lightBlue};
  }
`;

const leftContent = css`
  left: 0;
  animation: ${switchToLeft} ${animationDuration}s ${animationTypeMain};
  transform: translateX(0);
  border-radius: 10px 0 0 10px;
  background-position: 30% 50%;
`;

const rightContent = css`
  left: 100%;
  animation: ${switchToRight} ${animationDuration}s ${animationTypeMain};
  transform: translateX(-100%);
  border-radius: 0 10px 10px 0;
  background-position: 100% 50%;
`;

const Auth = styled.div`
  max-width: 1080px;
  width: 100%;
  height: 700px;
  box-shadow: 2px 2px 10px ${(props) => props.theme.views};
  background-color: ${(props) => props.theme.light};
  border-radius: 10px;
`;

const SignInText = styled.div<SwitchState>`
  & div {
    ${(props) =>
      props.signIn
        ? css`
            left: 0;
            animation: ${appearLeft} ${animationDuration}s
              ${animationTypeSecondary};
          `
        : css`
            left: -100%;
            animation: ${disappearLeft} ${animationDuration}s
              ${animationTypeSecondary};
          `}
  }
`;

const SignUpText = styled.div<SwitchState>`
  & div {
    ${(props) =>
      props.signIn
        ? css`
            right: -100%;
            animation: ${disappearRight} ${animationDuration}s
              ${animationTypeSecondary};
          `
        : css`
            right: 0;
            animation: ${appearRight} ${animationDuration}s
              ${animationTypeSecondary};
          `}
  }
`;

const AuthText = styled.div`
  position: fixed;
  background-color: transparent;
  width: ${cornerWidth}px;
  top: 40%;
  text-align: center;
`;

const AuthTextTitle = styled.div`
  color: ${(props) => props.theme.light};
  font-size: 24px;
  text-align: center;
  background-color: transparent;
  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const AuthTextSubtitle = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.light};
  font-weight: lighter;
`;

const BtnText = styled.span`
  position: absolute;
  transition: 0.8s ease-in-out;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const SwitchContent = styled.div<SwitchState>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 250px;
  width: ${cornerWidth}px;
  position: absolute;
  height: 100%;
  top: 0;
  z-index: ${zIndex.switchContent};
  overflow: hidden;
  background: ${(props) => props.theme.gradientMain};
  background-size: 400% 400%;
  ${(props) => (props.signIn ? leftContent : rightContent)};
`;

const SignInBtnText = styled(BtnText)<SwitchState>`
  transform: translateX(50%) translateY(-50%);

  ${(props) =>
    props.signIn
      ? css`
          opacity: 0;
          right: -60%;
        `
      : css`
          right: 50%;
          opacity: 1;
        `}
`;

const SignUpBtnText = styled(BtnText)<SwitchState>`
  transform: translateX(-50%) translateY(-50%);

  ${(props) =>
    props.signIn
      ? css`
          left: 50%;
          opacity: 1;
        `
      : css`
          opacity: 0;
          left: -60%;
        `}
`;

const Verify = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  right: -100%;

  &.entering {
    animation: ${appearRightLinear} ${switchVerifyDuration}ms linear;
  }

  &.entered {
    right: 0;
  }

  &.exiting {
    animation: ${disappearRightLinear} ${switchVerifyDuration}ms linear;
  }

  & .spinner {
    ${centralize};
    top: 60px;
    transform: translateY(-50%, -50%);
  }

  & .alert {
    ${centralize};
    top: 10px;
    background-color: ${(props) => props.theme.additionalBackground};
    animation: ${appearTop} 0.5s linear;
  }
`;

const VerifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 120px 0;
  height: inherit;
`;

const VerifyTitle = styled.div`
  width: min-content;
  height: min-content;
  border-radius: 50%;
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.primary};

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }

  & svg {
    width: ${svgSize}px;
    height: ${svgSize}px;
  }
`;

const VerifyText = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

const ResendBtn = styled.button<ResentState>`
  border: 0;
  color: ${(props) =>
    props.resent ? props.theme.success : props.theme.primary};
  background: transparent;
  ${(props) =>
    !props.resent &&
    css`
      cursor: pointer;
    `};
  font-size: 18px;

  &:hover {
    transition: 0.2s linear;
    color: ${(props) =>
      props.resent ? props.theme.success : props.theme.lightBlue};
  }

  &:active {
    transform: scale(1.1);
    color: ${(props) =>
      props.resent ? props.theme.success : props.theme.lightBlue};
  }

  &:focus {
    outline: 0;
  }
`;

const SignOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & button {
    background-color: ${(props) => props.theme.primary};
    max-width: 300px;
    width: 100%;
  }
`;

export const Styled = {
  Auth,
  Form,
  AuthContainer,
  SignInText,
  SignUpText,
  SwitchContent,
  AuthTextTitle,
  AuthTextSubtitle,
  SignInBtnText,
  SignUpBtnText,
  FormContainer,
  FormTitle,
  InputsContainer,
  BtnText,
  AuthText,
  Verify,
  VerifyContainer,
  VerifyTitle,
  VerifyText,
  ResendBtn,
  SignOut,
  Main,
};
