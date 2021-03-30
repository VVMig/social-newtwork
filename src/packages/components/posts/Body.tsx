import React from 'react';
import { BodyProps } from './interfaces';
import { Styled } from './styled';
import { Avatar } from '../avatar/Avatar';

export const Body = ({ firstName, lastName, text, status }: BodyProps) => {
  return (
    <Styled.Body>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Author>
        <Avatar size={29} route="#" />
        <Styled.AuthorInfo>
          <Styled.Name>
            {firstName} {lastName}
          </Styled.Name>
          <Styled.Subname>{status}</Styled.Subname>
        </Styled.AuthorInfo>
      </Styled.Author>
    </Styled.Body>
  );
};
