import styled from 'styled-components';

const viewSize = '17px';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 20px 0 20px;
  flex-direction: column;
`;

const Stream = styled.div`
  border-radius: 25px 25px 0 0;
  height: 365px;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  position: relative;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 390px;
  border-radius: 0 0 25px 25px;
  width: 100%;
  background-color: ${(props) => props.theme.light};
`;

const LiveStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pink};
  border-radius: 3px;
  width: 34px;
  height: 16px;
  color: ${(props) => props.theme.light};
  font-size: 10px;
  text-transform: uppercase;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 16px;
  border-radius: 3px;
  color: ${(props) => props.theme.light};
  font-size: 10px;
  min-width: 46px;
  background-color: ${(props) => props.theme.additionalGrey};
  margin-left: 3px;
  padding-right: 1px;

  & div {
    height: 16px;
  }

  & svg {
    width: ${viewSize};
    height: ${viewSize};
  }
`;

const StreamHeader = styled.div`
  display: flex;
  position: absolute;
  left: 16px;
  top: 16px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.additional};
  height: 45px;
  border-radius: 0 0 25px 25px;
  padding: 0 10px 0 50px;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.purple};
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 19px 15px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Message = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 0;
`;

const MainInfo = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 0 5px;
`;

const Time = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.greyLight}; ;
`;

const Name = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.black}; ;
`;

const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.greyMain};
  word-break: break-all;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Styled = {
  Container,
  Stream,
  Chat,
  LiveStatus,
  StreamHeader,
  Views,
  Form,
  Input,
  Button,
  MessagesContainer,
  Message,
  MainInfo,
  Time,
  Name,
  Text,
  Content,
};
