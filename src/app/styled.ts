import styled, { css } from 'styled-components';
import { sidebarInfoWidth } from './sidebar-info/styled';
import { sidebarLiveWidth } from './sidebar-live/styled';
import { Alert, headerHeight } from '../packages/components';
import { appearTop } from './auth/configs/animations';

interface AuthProps {
  register?: boolean;
  auth?: boolean;
  common?: boolean;
  sidebar?: boolean;
}

const paddingTop = 30;
const contentMaxWidth = 850;
const contentMinWidth = 750;

const authStyles = css`
  grid-template-columns: ${sidebarInfoWidth}px 1fr ${sidebarLiveWidth}px;
`;
const commonStyles = css`
  grid-template-columns: 1fr;
  justify-items: center;
  padding-top: 20px;
`;
const registerStyles = css`
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const Content = styled.div<AuthProps>`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  width: 100%;
  ${(props) =>
    props.auth &&
    css`
      padding-top: ${headerHeight + paddingTop}px;
    `}
`;

const ContentWidth = styled.div<AuthProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: 0.3s linear;
  max-width: ${(props) =>
    props.sidebar ? contentMinWidth : contentMaxWidth}px;
`;

const Wrapper = styled.div<AuthProps>`
  overflow: hidden;
  display: grid;
  * {
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #91929d;
      border-radius: 20px;
    }
  }
  ${(props) => props.auth && authStyles};
  ${(props) => props.common && commonStyles};
  ${(props) => props.register && registerStyles};
  width: 100%;
  height: 100vh;
`;

const PageSpinner = styled.div`
  & .spinner {
    width: 100px;
  }
  & .spinner > div {
    width: 30px;
    height: 30px;
  }
`;

const GlobalAlert = styled(Alert)`
  & {
    position: fixed;
    left: 50%;
    top: 5px;
    transform: translate(-50%);
    background-color: ${(props) => props.theme.mainBackground};
    box-shadow: 0 0 2px ${(props) => props.theme.black};
    animation: ${appearTop} 0.2s linear;
  }
`;

export const Styled = {
  Wrapper,
  Content,
  PageSpinner,
  ContentWidth,
  GlobalAlert,
};
