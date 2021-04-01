import { useField } from 'formik';
import React from 'react';
import { Styled } from './styled';

interface Props {
  name: string;
  placeholder?: string;
  type?: string;
}

export const InputGroup = (props: Props) => {
  const { placeholder } = props;
  const [field, meta] = useField(props);

  return (
    <Styled.InputGroup>
      <Styled.Input
        {...field}
        {...props}
        error={meta.error && meta.touched ? true : false}
        success={!meta.error && meta.touched ? true : false}
      ></Styled.Input>
      <Styled.Label>{placeholder}</Styled.Label>
      {meta.error && meta.touched && <Styled.Error>{meta.error}</Styled.Error>}
    </Styled.InputGroup>
  );
};
