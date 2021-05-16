import React from 'react';
import { BodyProps } from './interfaces';
import { Styled } from './styled';

export const Body = ({ author, text }: BodyProps) => {
  return (
    <Styled.Body>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Author>
        <Styled.AuthorInfo>
          <Styled.Name>{author}</Styled.Name>
        </Styled.AuthorInfo>
      </Styled.Author>
    </Styled.Body>
  );
};
