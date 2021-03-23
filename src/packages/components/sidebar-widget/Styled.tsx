import styled from 'styled-components';
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
    height: 1px;
    display: block;
    background-color: #003393;
    bottom: 0;
    left: 0;
    opacity: 0;
  }

  &:hover::after {
    transition: 0.5s linear;
    opacity: 1;
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
