import styled from 'styled-components';

interface WrapperProps {
  headerHeight: number;
}

const paddingTop = 30;

export const Wrapper = styled.div<WrapperProps>`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.headerHeight + paddingTop}px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
