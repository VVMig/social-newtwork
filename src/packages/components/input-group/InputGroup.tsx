import { useField } from 'formik';
import React from 'react';
import { Styled } from './styled';

interface Props {
  name: string;
  placeholder?: string;
  type?: string;
  icon?: JSX.Element;
}

export const InputGroup = (props: Props) => {
  const inputAttrs = {
    name: props.name,
    type: props.type,
    placeholder: props.placeholder,
  };

  const { icon } = props;

  const [field] = useField({ ...inputAttrs });

  return (
    <Styled.InputGroup>
      <Styled.IconContainer>{icon}</Styled.IconContainer>
      <Styled.Input {...field} {...inputAttrs} />
    </Styled.InputGroup>
  );
};
