import styled, { css, keyframes } from 'styled-components';

import { zIndex } from '../zIndex';

const bounceDelay = keyframes`
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
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
`;

const Spinner = styled.div`
  width: 70px;
  text-align: center;
  z-index: ${zIndex.spinner};
`;

const BounceLeft = styled.div`
  ${generalCss}
`;

const BounceMiddle = styled.div`
  ${generalCss}
  animation-delay: 0.16s;
`;

const BounceRight = styled.div`
  ${generalCss}
  animation-delay: 0.32s;
`;

export const Styled = {
  Spinner,
  BounceLeft,
  BounceMiddle,
  BounceRight,
};
