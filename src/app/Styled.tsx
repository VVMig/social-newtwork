import styled from 'styled-components';

interface WrapperProps {
  width: string;
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${(props) => props.width};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 0 0 0;
  overflow-x: hidden;
  overflow-y: auto;
`;
