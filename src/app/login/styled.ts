import styled, { css, keyframes } from 'styled-components';
import { Form as FormikForm } from 'formik';
import { zIndex } from '../../packages/components';

const switchDuration = 0.8;

const cornerWidth = 400;

const additionalWidthForSwitch = 100;

const animationType = 'ease-in-out';

const appearRight = keyframes`
  0%{
    right: -100%;
  }
  40%{
    right: -70%;
  }
  70%{
    right: -10%;
  }
  100%{
    right: 0;
  }
`;

const appearLeft = keyframes`
  0%{
    left: -100%;
  }
  40%{
    left: -70%;
  }
  70%{
    left: -10%;
  }
  95%{
    left: 0;
  }
`;

const disappearLeft = keyframes`
  0%{
    left: 0;
  }
  40%{
    left: -70%;
  }
  80%{
    left: -90%;
  }
  95%{
    left: -100%;
  }
`;

const disappearRight = keyframes`
  0%{
    right: 0;
  }
  40%{
    right: -70%;
  }
  80%{
    right: -90%;
  }
  100%{
    right: -100%;
  }
`;

const switchToRight = keyframes`
  0%{
    left: 0;
    transform: translateX(0);
    width: ${cornerWidth}px;
    border-radius: 10px 0 0 10px;

  }
  50%{
    width: ${cornerWidth + additionalWidthForSwitch}px;
  }
  100%{
    width: ${cornerWidth}px;
    left: 100%;
    transform: translateX(-100%);
    border-radius: 0 10px 10px;

  }
`;

const switchToLeft = keyframes`
  0%{
    left: 100%;
    transform: translateX(-100%);
    width: ${cornerWidth}px;
    border-radius: 0 10px 10px;

  }
  50%{
    width: ${cornerWidth + additionalWidthForSwitch}px;

  }
  100%{
    width: ${cornerWidth}px;

    left: 0;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;

  }
`;

const WelcomeContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const switchToLeftForm = keyframes`
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

const switchToRightForm = keyframes`
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
          animation: ${switchToRightForm} 0.8s ${animationType};
        `
      : css`
          left: 0;
          border-radius: 10px 0 0 10px;
          animation: ${switchToLeftForm} 0.8s ${animationType};
        `}
`;

const FormTitle = styled.div`
  color: ${(props) => props.theme.primary};
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

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 150px 150px;
  justify-content: space-between;
  align-items: center;

  & button {
    margin-top: 10px;
    border: 0;
    background-color: ${(props) => props.theme.primary};
  }
`;

const cornerStyles = css<SwitchState>`
  position: fixed;
  background-color: transparent;
  width: ${cornerWidth}px;
  top: 40%;
  text-align: center;
`;

const signInSwitch = css`
  left: 0;
  animation: ${switchToLeft} ${switchDuration}s ${animationType};
  transform: translateX(0);
  border-radius: 10px 0 0 10px;
`;

const signUpSwitch = css`
  left: 100%;
  animation: ${switchToRight} ${switchDuration}s ${animationType};
  transform: translateX(-100%);
  border-radius: 0 10px 10px 0;
`;

interface SwitchState {
  signIn: boolean;
}

const Login = styled.div`
  max-width: 1080px;
  width: 100%;
  height: 700px;
  box-shadow: 2px 2px 10px ${(props) => props.theme.views};
  background-color: ${(props) => props.theme.mainBackground};
  border-radius: 10px;
`;

const LeftContent = styled.div<SwitchState>`
  ${cornerStyles}
  ${(props) =>
    props.signIn
      ? css`
          left: 0;
          animation: ${appearLeft} 0.8s linear;
        `
      : css`
          left: -100%;
          animation: ${disappearLeft} 0.8s linear;
        `}
`;

const RightContent = styled.div<SwitchState>`
  ${cornerStyles};

  ${(props) =>
    props.signIn
      ? css`
          right: -100%;
          animation: ${disappearRight} 0.8s linear;
        `
      : css`
          right: 0;
          animation: ${appearRight} 0.8s linear;
        `}
`;

const SwitchContent = styled.div<SwitchState>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 250px;
  width: ${cornerWidth}px;
  background: ${(props) => props.theme.primary};
  position: absolute;
  height: 100%;
  top: 0;
  z-index: ${zIndex.switchContent};
  ${(props) => (props.signIn ? signInSwitch : signUpSwitch)};
  overflow: hidden;
`;

const CornerTitle = styled.div`
  color: ${(props) => props.theme.light};
  font-size: 24px;
  text-align: center;
  background-color: transparent;
  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const CornerText = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.light};
  font-weight: lighter;
`;

const switchBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 54px;
`;

const SwitchBtn = styled.button`
  border: 2px solid ${(props) => props.theme.light};
  width: 60%;
  border-radius: 25px;
  padding: 25px 0px;
  font-size: 18px;
  z-index: ${zIndex.switchBtn};
  background-color: transparent;
  cursor: pointer;
  order: 2;
  overflow: hidden;
  color: ${(props) => props.theme.light};
  position: relative;

  &:focus {
    outline: 0;
  }

  &:active {
    transition: 0.1s linear;
    transform: scale(0.95);
  }
`;

const SignInBtnText = styled.span<SwitchState>`
  position: absolute;
  transition: 0.8s ease-in-out;
  top: 50%;
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

const SignUpBtnText = styled.span<SwitchState>`
  position: absolute;
  transition: 0.8s ease-in-out;
  top: 50%;
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
  Login,
  Form,
  WelcomeContainer,
  LeftContent,
  RightContent,
  SwitchContent,
  CornerTitle,
  CornerText,
  SwitchBtn,
  SignInBtnText,
  SignUpBtnText,
  switchBtnContainer,
  FormContainer,
  FormTitle,
  InputsContainer,
};
