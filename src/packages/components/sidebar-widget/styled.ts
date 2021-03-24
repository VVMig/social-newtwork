import styled from 'styled-components';
import { OnlineProps } from './interfaces';

const SidebarWidget = styled.div`
  padding-top: 35px;
`;

const Title = styled.div`
  color: #91929d;
  font-size: 12px;
  text-transform: uppercase;
  padding-left: 28px;
`;

const List = styled.div`
  padding: 25px 0 0 0;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 0 24px 0 28px;
  position: relative;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 105, 255);
  border-radius: 50%;
`;

const Name = styled.div`
  padding-left: 15px;
  font-size: 13px;
  font-weight: lighter;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;

const Online = styled.span<OnlineProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;

export const Styled = {
  Online,
  Status,
  Name,
  Img,
  Info,
  Item,
  List,
  Title,
  SidebarWidget,
};
