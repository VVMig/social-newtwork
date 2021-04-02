import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';
import { zIndex } from '../../packages/components';
import { SwitchState } from './interfaces';
import {
  appearLeft,
  appearRight,
  cornerWidth,
  disappearLeft,
  disappearRight,
  switchToLeft,
  switchToLeftForm,
  switchToRight,
  switchToRightForm,
} from './animations';

const animationDuration = 0.8;
const animationTypeMain = 'ease-in-out';
const animationTypeSecondary = 'linear';

const AuthContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FormContainer = styled.div<SwitchState>`
  display: flex;
  max-width: calc(100% - ${cornerWidth}px);
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;

  ${(props) =>
    props.signIn
      ? css`
          left: 100%;
          border-radius: 0 10px 10px 0;
          transform: translateX(-100%);
          animation: ${switchToRightForm} 0.8s ${animationTypeMain};
        `
      : css`
          left: 0;
          border-radius: 10px 0 0 10px;
          animation: ${switchToLeftForm} 0.8s ${animationTypeMain};
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

const Form = styled(FormikForm)<SwitchState>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 150px 150px;
  justify-content: space-between;
  align-items: center;

  ${FormTitle} {
    color: ${(props) =>
      props.signIn ? props.theme.primary : props.theme.lightBlue};
  }

  & button {
    margin-top: 10px;
    border: 0;
    background-color: ${(props) =>
      props.signIn ? props.theme.primary : props.theme.lightBlue};
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

const LeftText = styled.div<SwitchState>`
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

const RightText = styled.div<SwitchState>`
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

export const Styled = {
  Auth,
  Form,
  AuthContainer,
  LeftText,
  RightText,
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
};
