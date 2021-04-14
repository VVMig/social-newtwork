import styled from 'styled-components';
import { zIndex } from '../zIndex';

const logoSize = '30px';
const notificationsSize = '25px';
const arrowSize = '25px';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.mainBackground};
  z-index: ${zIndex.sideBarInfo};
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  color: ${(props) => props.theme.additionalDarkGrey};
  font-size: 14px;
  outline: 0;
  border: 0;
  max-width: 215px;
  width: 100%;
  height: 47px;
  padding: 0 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.additionalLightGrey};
  transition: 0.1s linear box-shadow;

  &::placeholder {
    color: ${(props) => props.theme.greyDark};
  }

  &:focus {
    box-shadow: 0 0 0 0.15rem ${(props) => props.theme.darkBlue};
    transition: 0.1s linear box-shadow;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  padding: 0;
  z-index: ${zIndex.searchBtn};
  color: ${(props) => props.theme.greyDark};

  &:focus {
    outline: 0;
  }
`;

const Logo = styled.div`
  width: ${logoSize};
  height: ${logoSize};
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
`;

const NotificationsWrapper = styled.div`
  color: ${(props) => props.theme.greyDark};
  z-index: ${zIndex.notifications};
  padding-right: 22px;
`;

const Notify = styled.div`
  position: absolute;
  top: 3px;
  left: 13px;
  & span {
    font-size: 24px;
  }
`;

const Name = styled.div`
  color: ${(props) => props.theme.black};
  font-size: 12px;
  font-weight: bolder;
  padding-left: 8px;
`;

const Arrow = styled.div`
  color: ${(props) => props.theme.greyDark};
  & svg {
    width: ${arrowSize};
    height: ${arrowSize};
  }
`;

const Notifications = styled.div`
  cursor: pointer;
  position: relative;

  & svg {
    width: ${notificationsSize};
    height: ${notificationsSize};
  }
`;

export const Styled = {
  Logo,
  Button,
  Input,
  Form,
  Aside,
  NotificationsWrapper,
  Notify,
  Name,
  Arrow,
  Notifications,
};
