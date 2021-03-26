import styled from 'styled-components';
import { zIndex } from '../zIndex';

const logoSize = '30px';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f6f9fb;
  z-index: ${zIndex.sideBarInfo};
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  color: #555657;
  font-size: 14px;
  outline: 0;
  border: 0;
  max-width: 215px;
  width: 100%;
  height: 47px;
  padding: 0 40px;
  border-radius: 15px;
  background-color: #e8f0f4;
  transition: 0.1s linear box-shadow;

  &::placeholder {
    color: #949597;
  }

  &:focus {
    box-shadow: 0 0 0 0.15rem #00339352;
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
  color: #949597;

  &:focus {
    outline: 0;
  }
`;

const Logo = styled.div`
  width: ${logoSize};
  height: ${logoSize};
  background-color: rgb(71, 105, 255);
  border-radius: 50%;
`;

export const Styled = {
  Logo,
  Button,
  Input,
  Form,
  Aside,
};
