import styled from 'styled-components';

const SidebarWidget = styled.div`
  padding-top: 35px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.textDark};
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

const Online = styled.div`
  font-size: 18px;
`;

const Offline = styled.span`
  color: ${(props) => props.theme.textDark};
  font-size: 12px;
`;

export const Styled = {
  Offline,
  Online,
  Status,
  Name,
  Info,
  Item,
  List,
  Title,
  SidebarWidget,
};
