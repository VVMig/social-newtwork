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
  height: 390px;
  border-radius: 0 0 25px 25px;
  width: 100%;
  background: red;
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
  background-color: #9f989e;
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

export const Styled = {
  Container,
  Stream,
  Chat,
  LiveStatus,
  StreamHeader,
  Views,
};
