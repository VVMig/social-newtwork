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
  background-color: rgb(71, 105, 255);
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
  background-color: #fff;
`;

const LiveStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff567f;
  border-radius: 3px;
  width: 34px;
  height: 16px;
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  border-radius: 3px;
  color: #fff;
  font-size: 10px;
  min-width: 46px;
  background-color: rgba(158, 151, 157, 0.7);
  margin-left: 3px;

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
  background-color: #00f5f6;
  height: 45px;
  border-radius: 0 0 25px 25px;
  padding: 0 10px 0 50px;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: #003393;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: #003393;
  }

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 19px 27px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Message = styled.div`
  display: flex;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
`;

const Time = styled.div``;

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
};
