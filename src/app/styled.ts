import styled, { css } from 'styled-components';
import { sidebarInfoWidth } from './sidebar-info/styled';
import { sidebarLiveWidth } from './sidebar-live/styled';
import { headerHeight } from '../packages/components';
interface WrapperProps {
  auth?: boolean;
}

const paddingTop = 30;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding-top: ${headerHeight + paddingTop}px;
`;

const Wrapper = styled.div<WrapperProps>`
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
  ${(props) =>
    props.auth
      ? css`
          grid-template-columns: ${sidebarInfoWidth}px 1fr ${sidebarLiveWidth}px;
        `
      : css`
          grid-template-columns: 1fr;
          justify-items: center;
          align-items: center;
        `}
  width: 100%;
  height: 100vh;
`;

export const Styled = {
  Wrapper,
  Content,
};
