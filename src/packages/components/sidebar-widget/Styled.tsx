import styled, { keyframes } from 'styled-components';
import { OnlineProps } from './interfaces';

export const SidebarWidget = styled.div`
  padding: 35px 0 0 0;
`;

export const Title = styled.div`
  color: #91929d;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0 0 0 28px;
`;

export const List = styled.div`
  padding: 25px 0 0 0;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const underlineAppear = keyframes`
    0% {
    width: 0;
    opacity: 0.2;
    }
    100% {
    width: 100%;
    opacity: 0.5;
    }
`;

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 0 0 18px 0;
  padding: 0 24px 0 28px;
  position: relative;
  justify-content: space-between;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    display: block;
    background-color: rgb(71, 105, 255);
    bottom: 0;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
  }

  &:hover::after {
    animation: ${underlineAppear} 0.2s ease-in-out;
    opacity: 0.5;
  }

  &:last-child {
    margin: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.div`
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 105, 255);
  border-radius: 50%;
`;

export const Name = styled.div`
  padding: 0 0 0 15px;
  font-size: 13px;
  font-weight: lighter;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
`;

export const Online = styled.span<OnlineProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;
