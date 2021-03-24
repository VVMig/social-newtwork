import React from 'react';
import { BodyProps } from './interfaces';
import { Styled } from './styled';

export const Body = ({ firstName, lastName, subname, text }: BodyProps) => {
  return (
    <Styled.Body>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Author>
        <Styled.Avatar />
        <Styled.AuthorInfo>
          <Styled.Name>
            {firstName} {lastName}
          </Styled.Name>
          <Styled.Subname>{subname}</Styled.Subname>
        </Styled.AuthorInfo>
      </Styled.Author>
    </Styled.Body>
  );
};
