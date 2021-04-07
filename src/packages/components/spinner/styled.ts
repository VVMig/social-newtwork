import styled, { css, keyframes } from 'styled-components';

const skBounceDelay = keyframes`
  0%, 
  80%, 
  100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1.0);
  }
`;

const generalCss = css`
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.theme.primary};

  border-radius: 100%;
  display: inline-block;
  animation: ${skBounceDelay} 1.4s infinite ease-in-out both;
`;

const Spinner = styled.div`
  width: 70px;
  text-align: center;
`;

const Bounce1 = styled.div`
  ${generalCss}
`;

const Bounce2 = styled.div`
  ${generalCss}
  animation-delay: 0.16s;
`;

const Bounce3 = styled.div`
  ${generalCss}
  animation-delay: 0.32s;
`;

export const Styled = {
  Spinner,
  Bounce1,
  Bounce2,
  Bounce3,
};
