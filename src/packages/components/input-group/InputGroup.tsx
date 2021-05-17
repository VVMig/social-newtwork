import React from 'react';

import { useField } from 'formik';

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

  const [field, meta] = useField({ ...inputAttrs });

  return (
    <Styled.InputGroup>
      <Styled.IconContainer>{icon}</Styled.IconContainer>
      <Styled.Input
        {...field}
        {...inputAttrs}
        success={meta.touched && !meta.error}
        error={meta.touched && !!meta.error}
      />
      {meta.touched && meta.error && <Styled.Error>{meta.error}</Styled.Error>}
    </Styled.InputGroup>
  );
};
